<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid', 225);
            $table->unsignedInteger('customer_id');
            $table->string('invoice_no', 100);
            $table->string('payment_type', 50);
            $table->string('reference_no', 100)->default('');
            $table->decimal('base_amount', 8, 2);
            $table->decimal('discount_percentage', 8, 2)->nullable();
            $table->decimal('discount_amount', 8, 2)->nullable();
            $table->decimal('gst_amount', 8, 2)->nullable();
            $table->decimal('total_amount_payable', 8, 2);
            $table->decimal('total_rounded_amount_payable', 8, 2);
            $table->json('invoice_history');
            $table->json('invoice_address')->nullable();
            $table->decimal('paid_amount', 8, 2)->nullable();
            $table->decimal('amount_return', 8, 2)->nullable();
            $table->integer('user_id')->nullable();
            $table->dateTime('checkin')->nullable();
            $table->dateTime('checkout')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
