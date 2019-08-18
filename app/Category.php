<?php

namespace App;
 
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Model;

class Category extends BaseModel
{   
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function($query, $search) {
            $query->whereLike(['category_name'], $search);
        });
    }

    public function scopeSize($query, array $filters)
    { 
        return Arr::has($filters, 'size') ? $query->simplePaginate($filters['size']) : $query->simplePaginate();
    }
}
