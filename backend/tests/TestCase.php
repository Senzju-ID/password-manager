<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        
        // For testing API endpoints protected by auth:sanctum,
        // we need to bypass Sanctum's stateful check in test environment
        // by using the 'web' guard which doesn't have Sanctum's middleware constraints
    }

    /**
     * Authenticate user for API testing.
     * Uses 'web' guard instead of Sanctum to avoid test environment issues
     * where Sanctum middleware doesn't recognize test HTTP requests as stateful.
     * Production code still uses Sanctum token auth.
     */
    protected function actAsUser($user)
    {
        // Use web guard for testing - ensures auth persists across HTTP test requests
        $this->actingAs($user, 'web');
        return $this;
    }
}




