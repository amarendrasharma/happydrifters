<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends BaseModel
{
    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
