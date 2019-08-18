<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoiceDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid', 255)->default('');
            $table->unsignedInteger('invoice_id');
            $table->string('product_name', 255)->default('');
            $table->decimal('product_gst', 8, 2);
            $table->decimal('product_base_price', 8, 2);
            $table->decimal('product_price', 8, 2);
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('product_quantity');
            $table->decimal('total_price', 8, 2);
            $table->nullableTimestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_details');
    }
}
