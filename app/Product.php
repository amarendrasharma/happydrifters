<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{
    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function scopeNotFinished($query)
    {
        return $query->where('active', '>' , 0);
    }

    public function nothing() {
      return "  nothing, git purpoasasassesdsdsdsdsdsdsd";
    }
}
