<?php

namespace Tests\Feature;

use App\User;
use App\Category;
use Tests\TestCase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase; 
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CategoryControllerTest extends TestCase
{ 
    use DatabaseMigrations;

    public function setUp() : void
    {
        parent::setUp(); 
        $this->runDatabaseMigrations();
        $this->withExceptionHandling();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $this->withHeader('Accept', 'application/json');
    }

    /** @test */
    public function store_a_category()
    {
        $response = $this->post('/category', [
            'category_name' => 'testing'
        ]);

        // dd($response->decodeResponseJson());

        $response->assertSuccessful()
                ->assertJson([
                    "data" => [
                        "category_name" => "testing", 
                        "id" => 1
                    ],
                    "status" => "succcess"
                ]);
    }

    /**  @test */
    public function get_all_categories_without_search_and_size()
    {
        $count = 3;

        factory(Category::class, $count)->create();
        
        $response = $this->get('/category');  
        // dd($response->decodeResponseJson()); 
        $response->assertSuccessful()
                ->assertJsonCount($count, 'data')
                ->assertJson([
                    "current_page" => 1, 
                    "first_page_url" => "http://hdrifters.softinvoice.in/category?page=1",
                    "from" => 1,
                    "next_page_url" => null,
                    "path" => "http://hdrifters.softinvoice.in/category",
                    "per_page" => 15,
                    "prev_page_url" => null,
                    "to" => 3
                ]);
    }

    /** @test */
    public function show_category_single_page()
    {
        $category = factory(Category::class)->create();
        
        $response = $this->get("/category/{$category->uuid}");
        // dd($response->decodeResponseJson());
        $response->assertSuccessful()
                ->assertJson([
                    "data" => $category->toArray()
                ]);
    }

    /** @test */
    public function updating_a_single_category()
    {
        $category = factory(Category::class)->create();
        // dd($category);
        $response = $this->post("/category/{$category->uuid}", [
            'category_name' => 'testing'
        ]); 
        $correctedData = $category->toArray();
        $correctedData['category_name'] = "testing";
        // dd($response->decodeResponseJson());
        $response->assertSuccessful()
                ->assertJson([
                    "data" => $correctedData
                ]);
    }
}
