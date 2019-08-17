<?php

namespace App\Http\Controllers;

use App\Invoice;
use App\InvoiceDetail;
use App\Customer;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function index(Request $request){
        $invoice = Invoice::query(); 
        if(auth()->user()->id === 1 ) {
            $invoices =  $invoice->with('customer')
                    ->orderBy('created_at', 'desc');
        }else 
        {
        $invoices = $invoice->where('user_id', auth()->user()->id)
                    ->with('customer')
                    ->orderBy('created_at', 'desc');
}
        if ($request->has('search') && ($request->get('search') != null || $request->get('search') != 'null' || $request->get('search') != '')) {
            $searchQuery = $request->input('search');
            /**
             * eloquent-where-like-clause-with-more-than-two-columns
             */
            $invoices = $invoices->where('invoice_no', 'LIKE', '%'.$searchQuery.'%');
        }
        // if ($request->has('start') && $request->has('end')) {
            	
        //     $start = $request->input('start');
        //     $end = $request->input('end');
        //     $end = date('Y-m-d', strtotime($end) + (3600*24)); 
            
        //     return (new TransactionsExport($pos_id, $start, $end))->download('invoices.xlsx');
            
        // }
        $invoices = $invoices->simplePaginate(8);
        // dd($invoices);
        if ($request->ajax()) {
            return response()->json($invoices, 200);
        } 
    }

    public function store(Request $request)
    {
        $rules = [ 
            'customer_phone' => 'required|digits:10',  
            'customer_address' => 'required',
            'customer_name' => 'required', 
            'discount_amount' => 'required',
            'discount_percentage' => 'required',
            'base_amount' => 'required',
            'net_amount' => 'required',
            'rounded_amount' => 'required',
            'products' => 'required'
        ];

        $this->validate($request, $rules);

        // return $request->all();   
        $products = $request->products;
        $paymentDetails = $request->payment_details;
        $base_amount = $request->base_amount;
        $discount_percentage = $request->discount_percentage; 
        $discount_amount = $request->discount_amount; 
        $gst_amount = $request->gst_amount;
        $total_amount = $request->net_amount;
        $total_rounded_amount = $request->rounded_amount;
        
        // $invoiceNo = random_int(11111111, 99999999);  

        // Start transaction!
        try {
            DB::beginTransaction();
            // 1.pos customer save  
            $customer = Customer::updateOrCreate(
                [
                    'phone' => $request->customer_phone
                ],
                [
                    'uuid' => (string) Str::uuid(),
                    'customer_name' => $request->customer_name, 
                    'mobile' => $request->customer_phone, 
                    'customer_gstin' => strtoupper($request->customer_gstin),
                    'address' => $request->customer_address,
                ]
            ); 
// lorem
            $invoice_address = [
                'customer_name' => $customer->customer_name,
                'customer_phone' => $customer->phone,
                'customer_gstin' => $request->customer_gstin,
                'billing_address' => $customer->customer_address,
                'billing_state_code' => $customer->customer_address
            ];

            $inventory = [];

            foreach($products as $key => $product) {
                // return($product);
                array_push($inventory, [
                    'product_id' => $product['id'],
                    'base_price' => $product['base_price'],
                    // 'price' => $product['price'],
                    'product_gst' => $product['product_gst'],
                    'product_name' => $product['product_name'],
                    'quantity' => $product['quantity'],
                    'total_price' => $product['total_price']
                ]);
            }
            
            $invoice = Invoice::create([  
                'uuid' => (string) Str::uuid(),
                'customer_id' => $customer->id,                   
                // 'invoice_no' => $invoiceNo,
                'payment_type' => $request->payment_type,
                // 'reference_no' => $referenceNo,
                'base_amount' => $base_amount,
                'discount_percentage' => $discount_percentage, 
                'discount_amount' => $discount_amount, 
                'gst_amount' => $gst_amount, 
                'total_amount_payable' => $total_amount, 
                'total_rounded_amount_payable' => $total_rounded_amount,
                'invoice_history' => json_encode($inventory),  
                'invoice_address' => json_encode($invoice_address),
                'user_id' => auth()->user()->id
                // 'paid_amount' => $paid_amount,
                // 'amount_return' => $amount_return
            ]);  
                // dd( $request->tender_amount);
            // $amount_paid = $request->balance_left <= 0 ? $total_rounded_amount : $request->tender_amount;


            $saved_invoice = $invoice;
      
            foreach($products as $key => $product) {
                InvoiceDetail::create([
                    'uuid' => (string) Str::uuid(),
                    'product_gst' => $product['product_gst'],
                    'product_name' => $product['product_name'],
                    'product_base_price' => $product['base_price'],
                    // 'product_price' => $product['price'],
                    'invoice_id' => $invoice->id, 
                    'product_id' => $product['id'],                   
                    'product_quantity' => $product['quantity'],
                    'total_price' => $product['total_price'],
                    'product_price' => $product['base_price']
                ]); 
            } 

            // Commit the queries!
            DB::commit();     
            // print_r($saved_invoice);
            // print_r($this->formatInvoiceData($saved_invoice->uuid));

            return response([
                'status' => 'success',
                'data' => $saved_invoice->uuid
            ], 200);      

        } catch(\Exception $e) {
            DB::rollback();
            throw $e;
            return response([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }  
    }

    public function show($invoice_uuid)
    {
        return response([
            'status' => 'success',
            'data' => $this->formatInvoiceData($invoice_uuid)
        ], 200);
    }

    // public function balance($uuid)
    // {
    //     $invoice = Invoice::uuid($uuid);

    //     $data['balances'] = $invoice->invoicebalances;
    //     $data['balance'] = $invoice->balance();

    //     return response([
    //         'status' => 'success',
    //         'data' => $data
    //     ], 200);        
    // }

    // public function balanceStore(Request $request, $uuid)
    // {
    //     $invoice = Invoice::uuid($uuid);

    //     $amount_paid = $request->balance_left <= 0 ? $request->balance : $request->tender_amount;

    //     $balance = InvoiceBalance::create([
    //         'uuid' => (string) Str::uuid(),
    //         'invoice_id' => $invoice->id,
    //         'amount_paid' => $amount_paid,
    //         'balance_left' => $request->balance_left
    //     ]);

    //     return response([
    //         'status' => 'success',
    //         'data' => $balance
    //     ], 200);        
    // }

    protected function formatInvoiceData($uuid) 
    {
        $invoice = Invoice::with('customer')->where('uuid', $uuid)->first(); 

        $data = $invoice->toArray(); 
        $data['created_at'] = (string) $invoice->created_at->format('d-m-Y');
        $data['balance'] = 0;
        
        // $quantity = InvoiceDetail::where('invoice_id', $invoice->id)->sum('lot_quantity');
        $invoicedetails = InvoiceDetail::with('invoice')->where('invoice_id', $invoice->id)->get();
        // $gst = []; 
        $total_gst_amount = 0;

        $discount_percentage = $invoice->discount_percentage;
        
        $data['invoicedetails'] = $invoicedetails->map(function($invoicedetail) use($discount_percentage) {
            $invoicedetail->base_price = $invoicedetail->product_base_price;
            $invoicedetail->base_amount = $invoicedetail->product_quantity * $invoicedetail->base_price;
            $invoicedetail->discount_amount = $invoicedetail->base_amount * $discount_percentage/100;
            $invoicedetail->taxable_amount = $invoicedetail->base_amount - $invoicedetail->discount_amount;
            $product_gst = $invoicedetail->product_gst; 
            $invoicedetail->total_gst = $invoicedetail->taxable_amount * ($product_gst/100); 
            $invoicedetail->total_amount = $invoicedetail->taxable_amount + $invoicedetail->total_gst;
            //set per product gst
            $invoicedetail->cgst_per = $product_gst / 2;
            $invoicedetail->cgst_value = $invoicedetail->total_gst / 2;
            $invoicedetail->sgst_per = $product_gst / 2;
            $invoicedetail->sgst_value = $invoicedetail->total_gst / 2;   
            return $invoicedetail;
        });  
            
        $data['total_gst_amount'] = $data['invoicedetails']->sum('total_gst');  
        $data['total_amount'] = round($data['invoicedetails']->sum('total_amount') , 0, PHP_ROUND_HALF_UP);  

        return $data;
    }
}











