<?php

namespace Tests\Feature;

use App\User;
use App\Product;
use App\Category;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase; 
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ProductControllerTest extends TestCase
{
    use DatabaseMigrations; 

    public function setUp(): void
    {
        parent::setUp();
        $this->runDatabaseMigrations();
        $this->withExceptionHandling(); 
        $user = factory(User::class)->create();
        $this->actingAs($user);
    }

    /** @test */
    public function store_a_product()
    {
        $this->withHeader('Accept', 'application/json');
        $response = $this->post('/products', [
            'product_name' => 'testing',
            'category' => factory(Category::class)->create()->id,
            'uom' => 'nos',
            'product_price' => 3000,
            'gst' => 18
        ]);

        // dd($response->decodeResponseJson());

        $response->assertSuccessful()
            ->assertJson([
                "data" => [
                    "product_name" => "testing",
                    'category_id' => 1,
                    'uom' => 'nos',
                    'product_price' => 3000,
                    'gst' => 18,
                    'id' => 1
                ],
                "status" => "succcess"
            ]);
    }

    /** @test */
    public function get_all_products_without_search_and_size()
    {
        $count = 3;

        factory(Product::class, $count)->create(); 

        $response = $this->get('/products');
        // dd($response->decodeResponseJson()); 
        $response->assertSuccessful()
            ->assertJsonCount($count, 'data')
            ->assertJson([
                "current_page" => 1,
                "first_page_url" => "http://hdrifters.softinvoice.in/products?page=1",
                "from" => 1,
                "next_page_url" => null,
                "path" => "http://hdrifters.softinvoice.in/products",
                "per_page" => 15,
                "prev_page_url" => null,
                "to" => 3
            ]);
    }

    /** @test */
    public function show_product_single_page()
    {
        $product = factory(Product::class)->create();

        $response = $this->get("/products/{$product->uuid}");
        // dd($response->decodeResponseJson());
        $response->assertSuccessful()
            ->assertJson([
                "data" => $product->toArray()
            ]);
    }

    /** @test */
    public function updating_a_single_product()
    {
        $this->withHeader('Accept', 'application/json');
        $product = factory(Product::class)->create();
        // dd($product);
        $response = $this->post("/products/{$product->uuid}", [
            'product_name' => 'testing',
            'category_id' => 2,
            'uom' => 'kgs',
            'product_price' => 9000,
            'gst' => 5, 
        ]);
        $correctedData = $product->toArray();
        $correctedData['product_name'] = "testing";
        $correctedData['category_id'] = 2;
        $correctedData['uom'] = 'kgs';
        $correctedData['product_price'] = 9000;
        $correctedData['gst'] = 5; 

        // dd($response->decodeResponseJson());
        $response->assertSuccessful()
            ->assertJson([
                "data" => $correctedData
            ]);
    }
}
