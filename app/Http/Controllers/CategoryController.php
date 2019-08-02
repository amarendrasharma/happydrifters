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
        $categories = Category::
                    orderBy('created_at', 'desc');
        if ($request->has('search') && ($request->get('search') != null || $request->get('search') != 'null' || $request->get('search') != '')) {
            $searchQuery = $request->input('search'); 
            $categories = $categories->where('name', 'like', '%'.$searchQuery.'%'); 
        }

        if($request->has('size')) {
            $categories = $categories->simplePaginate($request->size);
        }else {
            $categories = $categories->get();
        }
        // dd($categories);
        return response($categories);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $rules = [
            'category_name' => 'required|string|max:255', 
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
            $category = Category::create([ 
                'uuid' => (string) Str::uuid(),
                'category_name' => $request->category_name
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
        if($category) {
            return response()->json([
                'data' => $category,
                'status' => 'succcess',
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($uuid)
    {
        $Category = Category::where('uuid',$uuid)->first();

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
        $rules = [
            'category_name' => 'required|string|max:255'
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
            $Category = Category::uuid($uuid);

            $Category->category_name = $request->category_name; 
            $Category->save();
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
        if($Category) {
            return response()->json([
                'data'  => $Category,
                'status' => 'success'
            ]);
        }
    }

  
    public function destroy(Category $category)
    {
        //
    }
}
