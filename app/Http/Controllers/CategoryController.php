<?php

namespace App\Http\Controllers;
use Validator;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class CategoryController extends Controller
{
    public function index(Request $request)
    {  
        $categories = Category::query()
                    ->orderByTime()
                    ->filter($request->only('search'))
                    ->size($request->only('size')); 
    
        return response($categories);
    } 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $this->validate($request, [
            'category_name' => 'required|string|max:255', 
        ]);   

        DB::beginTransaction();

        try { 
            $category = Category::create([ 
                'uuid' => (string) Str::uuid(),
                'category_name' => $request->category_name
            ]);

        }
        catch(\Exception $e)
        {
            DB::rollback();
            throw $e;
        }

        DB::commit();

        if($category) {
            return response()->json([
                'data' => $category,
                'status' => 'succcess',
            ]);
        }
    } 
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($uuid)
    {
        $Category = Category::uuid($uuid);

        return response([
            'data'  => $Category, 
            'status' => 'success'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uuid)
    {
        $this->validate($request, [
            'category_name' => 'required|string|max:255',
        ]);

        DB::beginTransaction();
        
        try {  
            $Category = Category::uuid($uuid);
            $Category->category_name = $request->category_name; 
            $Category->save();
        }
        catch(\Exception $e) {
            DB::rollback();
            throw $e; 
        }
        
        DB::commit();

        if($Category) {
            return response([
                'data'  => $Category,
                'status' => 'success'
            ]);
        }
    }
}
