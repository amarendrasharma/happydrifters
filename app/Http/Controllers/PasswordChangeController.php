<?php

namespace App\Http\Controllers;

use App\User; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordChangeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'old' => 'required',
            'password' => 'required|min:8|confirmed',
        ], [
            'old.required' => 'Enter your current password'
        ]);
 
        $user = User::find(auth()->user()->id);
        $hashedPassword = $user->password;
 
        if (Hash::check($request->old, $hashedPassword)) {
            //Change the password
            $user->fill([
                'password' => Hash::make($request->password)
            ])->save();
 
            return response([
                'status' => 'success',
                'message' => 'Password updated!'
            ], 200);
        } else {
            return response([
                'status' => 'error',
                'errors' => [
                    'old' => ["Current password is incorrect"]
                ]
            ], 422);
        }
    }
}
