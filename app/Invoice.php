<?php

namespace App; 

class Invoice extends BaseModel
{ 


    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function invoicedetails()
    {
        return $this->hasMany(InvoiceDetail::class);
    }


    public static function boot()
    {
        parent::boot();

        static::creating(function($model) {
            
            $tax_invoice_pre_format = auth()->user()->invoice_format();
            // dd($tax_invoice_pre_format);
            $latestInvoice =
                static::where("invoice_no", 'LIKE','%'.$tax_invoice_pre_format.'%')
                    ->latest('id')
                    ->value('invoice_no'); 
            // dd($latestInvoice);
            if ($latestInvoice) {
                $pieces = explode('/', $latestInvoice);
                // dd(end($pieces));
                // $number = intval(end($pieces)) + 1;
                $number = intval(end($pieces)) + 1;

                $digits = mb_strlen($number);
                // dd($digits);
                $formated_number = '';
                
                for($i=4; $i > $digits; $i--) { 
                    // dd($i);
                    $formated_number = $formated_number.'0';
                } 
                // dd(mb_strlen($number));
                $model->invoice_no .= $tax_invoice_pre_format. '/' . $formated_number.$number;
            }else {
                $number = '0001';

                $model->invoice_no .= $tax_invoice_pre_format . '/' . $number;
            }
        });
    }
}