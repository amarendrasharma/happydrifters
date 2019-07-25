<?php

namespace App\Http\Controllers;

use App\Invoice;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function daily_sales()
    { 

        if(auth()->user()->id === 1 ) {
        return Invoice::query() 
                ->whereDate('created_at', Carbon::today()) 
                ->sum('total_rounded_amount_payable'); 
        }
        else {
            return Invoice::query() 
            ->where('user_id', auth()->user()->id)
            ->whereDate('created_at', Carbon::today()) 
            ->sum('total_rounded_amount_payable'); 
        }
    } 

    public function weekly_sales()
    {
        $day1 = Carbon::parse('last sunday')->startOfDay();
        $day2 = Carbon::parse('next monday')->endOfDay();
        if(auth()->user()->id === 1 ) {
        return Invoice::query() 
                ->whereBetween('created_at', [$day1,$day2]) 
                ->sum('total_rounded_amount_payable');  
        }
        else{
            return Invoice::query() 
            ->where('user_id', auth()->user()->id)
            ->whereBetween('created_at', [$day1,$day2]) 
            ->sum('total_rounded_amount_payable');  
        }
    }

    public function monthly_sales()
    { 
        if(auth()->user()->id === 1 ) {
        return Invoice::query() 
                ->whereMonth('created_at', Carbon::now()->month) 
                ->sum('total_rounded_amount_payable');  
        }
        else {
            return Invoice::query() 
            ->where('user_id', auth()->user()->id)
            ->whereMonth('created_at', Carbon::now()->month) 
            ->sum('total_rounded_amount_payable');  
        }
    }

    public function index()
    {
        if(auth()->user()->id === 1 ) {
        $invoices = Invoice::query()  
            ->select('id', 'total_rounded_amount_payable', 'created_at') 
            ->orderBy('created_at','asc')
            ->get()
            ->groupBy(function($invoice) { 
                return date('d-M-Y',strtotime($invoice->created_at));
            });
        // dd($pos_transactions);
        }
        else {
            $invoices = Invoice::query()  
            ->where('user_id',auth()->user()->id)
            ->select('id', 'total_rounded_amount_payable', 'created_at') 
            ->orderBy('created_at','asc')
            ->get()
            ->groupBy(function($invoice) { 
                return date('d-M-Y',strtotime($invoice->created_at));
            });
        }
        
        $daily_sales = $this->daily_sales();

        $weekly_sales = $this->weekly_sales();

        $monthly_sales = $this->monthly_sales(); 

        $total_sales = $invoices->map(function($sale){
            return $sale->reduce(function($carry, $sale_item){
                return $carry + $sale_item->total_rounded_amount_payable;
            }, 0); 
        });
        // $sales = [];
        $sales = $total_sales; 
        if(auth()->user()->id === 1 ) {
        $total_sales =  Invoice::query()  
        ->sum('total_rounded_amount_payable');
        }
        else{
            $total_sales =  Invoice::query()  
            ->where('user_id',auth()->user()->id)
            ->sum('total_rounded_amount_payable');
        }
        $data = [
            'sales' => $sales,
            'daily_sales' => $daily_sales,
            'weekly_sales' => $weekly_sales,
            'monthly_sales' => $monthly_sales,
            'total_sales' => $total_sales

        ];  
        
        return response([
            'data'  => $data
        ]);
    }  

    public function getProductWiseSalesExcelDownload(Request $request, $pos_id)
    {
        if ($request->has('start') && $request->has('end')) {
            	
            $start = $request->input('start');
            $end = $request->input('end');
            $end = date('Y-m-d', strtotime($end) + (3600*24));  
            
            return (new PosProductWiseSales($pos_id, $start, $end))->download('pos-product-wise-sales.xlsx');
        }
    }
}
