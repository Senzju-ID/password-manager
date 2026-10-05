<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array<int, Rule|array<mixed>|string>
     */
    protected function passwordRules(?User $user = null): array
    {
        return [
            'required',
            'string',
            Password::default(),
            'confirmed',
            function ($attribute, $value, $fail) use ($user) {
                if ($user && Hash::check($value, $user->password)) {
                    $fail(__('The new password must be different from your current password.'));
                }
            },
        ];
    }
}
