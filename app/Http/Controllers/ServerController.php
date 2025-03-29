<?php

namespace App\Http\Controllers;

use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $servers = Server::all()->map(function ($server) {
            return [
                'id' => $server->id,
                'name' => $server->name,
                'description' => $server->description,
                'icon' => $server->icon ? asset('storage/' . $server->icon) : null,
                'owner_id' => $server->owner_id,
                'created_at' => $server->created_at,
                'updated_at' => $server->updated_at,
            ];
        });
        return response()->json($servers);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'string',
            'icon' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'owner_id' => 'required|exists:users,id'
        ]);
        $iconPath = $request->hasFile('icon') ? $request->file('icon')->store('server_icons', 'public') : null;
        $server = Server::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'icon' => $iconPath,
            'owner_id' => 3
        ]);
        return response()->json($server);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
