"use client"
import { useState } from 'react';
import api from '@/libs/axios';

// 1. Komponen Headers (Sudah diperbaiki tanpa error)
const Headers = () => {
    return (
        <header className="bg-slate-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Password Manager</h1>
                <span className="text-sm bg-green-500 px-3 py-1 rounded-full text-slate-900 font-semibold">STB Server</span>
            </div>
        </header>
    );
};

// 2. Komponen Utama Halaman
export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Langkah wajib Laravel Sanctum: Ambil token CSRF terlebih dahulu
            await api.get('/sanctum/csrf-cookie');

            // Jalankan request login ke backend Laravel di STB
            const response = await api.post('/login', {
                email,
                password,
            });

            alert('Login Berhasil!');
            console.log('Data User:', response.data);
        } catch (error: any) {
            console.error('Error Login:', error.response?.data);
            alert(error.response?.data?.message || 'Gagal terhubung ke server STB');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            {/* Memanggil Komponen Headers */}
            <Headers />

            {/* Konten Utama / Form Login */}
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Masuk ke Akun</h2>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="nama@email.com" 
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 disabled:bg-slate-400"
                        >
                            {loading ? 'Menghubungkan ke STB...' : 'Masuk'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
