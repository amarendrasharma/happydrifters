<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Product;
use App\Category;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'uuid' => (string) Str::uuid(),
        'product_name' => $faker->name,
        'category_id' => factory(Category::class)->create()->id,
        'uom' => $faker->word,
        'product_price' => $faker->numberBetween(1000, 9000),
        'gst' => $faker->randomElement([5,12,18])
    ];
});
