<?php

namespace App;
 
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected $guarded = [];

    public static function uuid($uuid) {
        return static::where('uuid',$uuid)->firstOrFail();
    }

    public function scopeOrderByTime($query)
    {
        $query->orderBy('created_at', 'desc');
    }
}
