<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $fillable = ['name', 'description', 'icon', 'owner_id'];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function members()
    {
        return $this->belongsToMany(User::class, 'server_members');
    }

    // public function channels()
    // {
    //     return $this->hasMany(Channel::class);
    // }

    // public function invites()
    // {
    //     return $this->hasMany(Invite::class);
    // }

    // public function messages()
    // {
    //     return $this->hasMany(Message::class);
    // }

    // public function roles()
    // {
    //     return $this->hasMany(Role::class);
    // }

    // public function bans()
    // {
    //     return $this->hasMany(Ban::class);
    // }

    // public function permissions()
    // {
    //     return $this->hasMany(Permission::class);
    // }

    // public function isOwner(User $user)
    // {
    //     return $this->owner_id === $user->id;
    // }

    // public function hasMember(User $user)
    // {
    //     return $this->members->contains($user);
    // }


}
