@extends('layouts.app')

@section('css')
    <style>
        .w-24 {
            width: 6rem;
        }
        .border-b-2 {
            border-bottom: 2px solid #dae1e7;
        }
    </style>
@endsection

@section('content')
<div class="container-full bg-primary-dark">
    <div class="row justify-content-center w-100">
        <div class="col-md-8">
            <b-form @submit.prevent="loginUser">
                <div class="vh-100 w-100 d-flex mx-auto align-items-center justify-content-center flex-column">
                    {{-- <img
                        src=""
                        alt="tea-garden"
                        style="width: 90px;"
                        class="mx-auto d-block mb-n5 rounded-circle position-relative"
                    > --}}
                    <div class="mb-4 text-center text-white">
                        <span class="h1">
                            Soft 
                        </span>
                        <span class="h4 text-uppercase font-italic font-weight-bold">Invoice</span>
                    </div>
                    <div class="bg-white rounded shadow-sm p-5 mx-auto w-100" style="max-width:480px">
                        <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}
                            <h4 class="mb-0 text-center font-weight-bold">Welcome Back!</h4>
                            <div class="mx-auto my-3 w-24 border-b-2"></div>
                            {{-- <p class="text-muted text-center">Please enter your credentials to continue</p> --}}
                            @if($errors->has('email'))
                            <div class="alert alert-danger text-center">
                                {{ $errors->first('email') }}
                            </div> 
                            @endif
                            <div class="form-group">
                                <label for="">
                                    Email
                                </label> 
                                <input type="email" name="email" id="email" required class="form-control"> 
                            </div> 

                            <div class="form-group">
                                <label for="">
                                    Password
                                </label> 
                                <input type="password" name="password" id="password" required class="form-control"> 
                            </div>  

                            <button type="submit" class="mt-4 btn btn-block btn-primary py-2">Log in</button> 
                        </form>
                    </div>
                    <p class="text-center text-white small pt-3">&copy; Soft Invoice &bull; Version 1.0</p>
                </div>
            </b-form>
        </div>
    </div>
</div>
@endsection  