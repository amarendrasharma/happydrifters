<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'uuid' => (string) Str::uuid(),
        'category_name' => $faker->name
    ];
});
