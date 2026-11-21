<?php

namespace App\Policies;

use App\Models\Password;
use App\Models\User;

class PasswordPolicy
{
    /**
     * Determine whether the user can view any models.
     * Used for index endpoint - owner sees all, user sees only their own (handled in controller)
     */
    public function viewAny(User $user): bool
    {
        return true; // All authenticated users can list (filtering done in controller)
    }

    /**
     * Determine whether the user can view the model.
     * Owner can view any password, user can only view their own
     */
    public function view(User $user, Password $password): bool
    {
        return $user->isOwner() || $password->user_id === $user->id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true; // All authenticated users can create
    }

    /**
     * Determine whether the user can update the model.
     * Owner can only update their own, user can only update their own
     */
    public function update(User $user, Password $password): bool
    {
        return $password->user_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     * Owner can only delete their own, user can only delete their own
     */
    public function delete(User $user, Password $password): bool
    {
        return $password->user_id === $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     * Not used - no soft deletes
     */
    public function restore(User $user, Password $password): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     * Not used - no soft deletes
     */
    public function forceDelete(User $user, Password $password): bool
    {
        return false;
    }
}
