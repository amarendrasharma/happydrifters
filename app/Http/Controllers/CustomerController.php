<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
  
    public function index()
    {
        return response()->json([
            'data' => Customer::all(),
            'msg' => 'new customer list'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $uuid = (string) Str::uuid();

        $data = [
                'uuid' => $uuid,
                'customer_name' =>   $request->name,
                'address'  =>   $request->address,
                'mobile' =>   $request->mobile,
                'phone' =>   $request->phone,
              
        ];

        $rules = [
            'name' => 'string|required',
            'address' => 'string|required',
            'mobile' => 'string|max:15',

        ];
        
        
        $validator = Validator::make($data,$rules);

        if($validator->fails())
        {
            return response()->json([
                'msg' => 'validation error',
                'error' => $validator->errors()
            ],422);
        }
        DB::beginTransaction();
        try {
            $customer_added  = Customer::create($data);
        }
        catch(\Exception $e){
            DB:rollBcak();
            throw $e;
        }

        DB::commit(); 
        if($customer_added) {
            return response()->json([
                'data' => $customer_added,
                'status' => 'succcess',
            ], 201);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($customer_uuid)
    {
        $customer = Customer::uuid($customer_uuid);

        $invoices = Invoice::query() 
                ->where('customer_id', $customer->id)
                ->with('customer')
                ->orderBy('created_at', 'desc');
                // ->select('id', 'uuid', 'customer_id', 'invoice_no', 'created_at', 'total_rounded_amount_payable');

        if ($request->has('search') && ($request->get('search') != null || $request->get('search') != 'null' || $request->get('search') != '')) {
            $searchQuery = $request->input('search');
            /**
             * eloquent-where-like-clause-with-more-than-two-columns
             */
            $invoices = $invoices->where('invoice_no', 'LIKE', '%'.$searchQuery.'%');
        } 

        $invoices = $invoices->simplePaginate(8);

        // dd($invoices);

        if ($request->ajax()) {
            return response()->json($invoices, 200);
        } 
    }

}
