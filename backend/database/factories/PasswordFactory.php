<?php

namespace Database\Factories;

use App\Models\Password;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Password>
 */
class PasswordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'name' => fake()->word(),
            'username' => fake()->email(),
            'password' => fake()->password(8, 20), // Variable length
            'url' => fake()->url(),
            'notes' => fake()->sentence(),
        ];
    }

    /**
     * Set specific user
     */
    public function forUser(User $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user->id,
        ]);
    }

    /**
     * Set empty password
     */
    public function emptyPassword(): static
    {
        return $this->state(fn (array $attributes) => [
            'password' => '',
        ]);
    }
}
