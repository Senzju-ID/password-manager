<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    /**
     * Create the controller instance.
     */
    public function __construct()
    {
        // Rate limit write operations to prevent brute force and DoS
        // 60 requests per minute per IP for store, update, destroy
        $this->middleware('throttle:60,1')->only(['store', 'update', 'destroy']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        if ($user->isOwner()) {
            $passwords = Password::paginate(50);
        } else {
            $passwords = $user->passwords()->paginate(50);
        }

        return response()->json($passwords, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create', Password::class);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:1000',
            'url' => 'nullable|url|max:255',
            'notes' => 'nullable|string|max:5000',
        ]);

        $user = $request->user();
        $validated['user_id'] = $user->id;

        $password = Password::create($validated);

        return response()->json($password, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Password $password)
    {
        $this->authorize('view', $password);
        return response()->json($password, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Password $password)
    {
        $this->authorize('update', $password);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'username' => 'sometimes|string|max:255',
            'password' => 'sometimes|string|max:1000',
            'url' => 'sometimes|nullable|url|max:255',
            'notes' => 'sometimes|nullable|string|max:5000',
        ]);

        $password->update($validated);

        return response()->json($password, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Password $password)
    {
        $this->authorize('delete', $password);
        $password->delete();

        return response()->json(['message' => 'Password deleted successfully'], 200);
    }
}

