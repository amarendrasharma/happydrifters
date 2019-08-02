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
                    ->orderBy('created_at', 'desc');

        if ($request->has('search') && ($request->get('search') != null || $request->get('search') != 'null' || $request->get('search') != '')) {
            $searchQuery = $request->input('search');
            /**
             * eloquent-where-like-clause-with-more-than-two-columns
             */
            $products = $products->where(function($query) use ($searchQuery) {
                $query->where('product_name', 'like', '%'.$searchQuery.'%');
                        // ->orWhere('category', 'like', '%'.$searchQuery.'%');
            });
        }

        $products = $products->simplePaginate(10);

        // dd($products);
        return response($products);

    }

    public function store(Request $request)
    {
        $rules = [
            'product_name' => 'required|string|max:255',
            'product_price' => 'required|numeric',
            'category' => 'required',
            'uom' => 'required|string|max:255',
            'gst' => 'required|nullable|numeric',
            // 'product_description' => 'nullable|string|max:255',
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails() ) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $uuid = (string) Str::uuid();

        DB::beginTransaction();

        try {
            // Validate, then create if valid
            $product = Product::create([
                'uuid' => $uuid,
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
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong on our end'
            ], 422);
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
        $rules = [
            'product_name' => 'required|string|max:255',
            'product_price' => 'required|numeric',
            'manufacturer' => 'string|max:255',
            'category_id' => 'required',
            'uom' => 'required|string|max:255',
            'gst' => 'required|nullable|numeric',
        ];

        $validator = Validator::make($request->all(),$rules);
        if($validator->fails() ) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();
        try {  
            $product = Product::uuid($uuid);

            $product->product_name = $request->product_name;
            $product->product_price = $request->product_price;
            $product->category_id = $request->category_id;
            // $product->product_description= $request->product_description;
            $product->uom = $request->uom;
            $product->gst = $request->gst;
            $product->save();
        }
        catch(\Exception $e) {
            DB::rollback();
            throw $e;
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
        DB::commit();
        if($product) {
            return response()->json([
                'data'  => $product,
                'status' => 'updated success'
            ]);
        }
    }

}
