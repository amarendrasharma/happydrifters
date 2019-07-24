<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
   
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'item_uuid' => $this->uuid,
            'item_name' => $this->product_name,
            "item_gst" => $this->gst,
            "category" => [
                "category_name" => $this->category->category_name
            ],
            'status' => $this->active,
            'base_price' => $this->product_price,
        ];  
    }
}
