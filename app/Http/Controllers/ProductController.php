<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Product;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index(Request $request)
    { 
        $products = Product::with('category')
                    ->orderByTime()
                    ->filter($request->only('search'))
                    ->size($request->only('size'));

        return response($products);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'product_name' => 'required|string|max:255',
            'product_price' => 'required|numeric',
            'category' => 'required',
            'uom' => 'required|string|max:255',
            'gst' => 'required|nullable|numeric'
        ]);  

        DB::beginTransaction();

        try {
            // Validate, then create if valid
            $product = Product::create([
                'uuid' => (string) Str::uuid(),
                'product_name' => $request->product_name,
                'product_price' => $request->product_price,
                'category_id'=>$request->category, 
                'uom' => $request->uom,
                'gst' => $request->gst,
            ]); 
        }

        catch(\Exception $e)
        { 
            DB::rollback();
            throw $e; 
        }

        DB::commit();

        if($product) {
            return response()->json([
                'data' => $product,
                'status' => 'succcess',
            ], 201);
        }
    }

    public function edit($uuid)
    {
        $product = Product::with('category')->where('uuid', $uuid)->first();

        return response([
            'data'  => $product, 
            'status' => 'success'
        ]);
    }
  
    public function update(Request $request, $uuid)
    { 
        $this->validate($request, [
            'product_name' => 'required|string|max:255',
            'product_price' => 'required|numeric', 
            'category_id' => 'required',
            'uom' => 'required|string|max:255',
            'gst' => 'nullable|numeric',
        ]); 

        DB::beginTransaction();

        try {  
            $product = Product::uuid($uuid);

            $product->product_name = $request->product_name;
            $product->product_price = $request->product_price;
            $product->category_id = $request->category_id;
            $product->uom = $request->uom;
            $product->gst = $request->gst;
            $product->save();
        }
        catch(\Exception $e) {
            DB::rollback();
            throw $e; 
        }

        DB::commit();

        if($product) {
            return response()->json([
                'data'  => $product,
                'status' => 'success'
            ]);
        }
    }

}
