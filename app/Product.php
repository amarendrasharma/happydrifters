<?php

namespace App;

use Illuminate\Support\Arr;
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

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->whereLike(['product_name','categories.category_name'], $search);
        });
    }

    public function scopeSize($query, array $filters)
    {
        return Arr::has($filters, 'size') ? $query->simplePaginate($filters['size']) : $query->simplePaginate();
    }
}
