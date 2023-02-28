<?php

namespace App\Http\Controllers;

use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class User extends Controller
{
    public function index()
    {
        $user = ModelsUser::all();
        return Inertia::render('Dashboard', ['user' => $user]);
    }

    public function delete($id)
    {
        ModelsUser::find($id)->delete();
        return redirect()->route('dashboard');
    }
}
