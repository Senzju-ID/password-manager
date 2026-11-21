<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Crypt;

/**
 * Password Model - Menyimpan password akun pengguna
 * 
 * @property int $id Primary key
 * @property int $user_id Foreign key ke users table
 * @property string $name Nama entry password (e.g., "Gmail", "GitHub")
 * @property string $username Username atau email akun
 * @property string $password Password terenkripsi (auto decrypt via accessor)
 * @property string|null $url URL akun/layanan (optional)
 * @property string|null $notes Catatan tambahan (optional)
 * @property \Carbon\Carbon $created_at Waktu pembuatan
 * @property \Carbon\Carbon $updated_at Waktu update terakhir
 */
#[Fillable(['name', 'username', 'password', 'url', 'notes'])]
class Password extends Model
{
    use HasFactory;

    protected $hidden = ['password'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Encrypt password saat disimpan, decrypt saat diakses
     * Menggunakan Laravel Crypt untuk keamanan
     */
    protected function password(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => filled($value) ? Crypt::decryptString($value) : $value,
            set: fn ($value) => filled($value) ? Crypt::encryptString($value) : $value,
        );
    }
}




