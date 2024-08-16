// Importing the router module
import Router from './router.js';

// Initialize the application
function init() {
    // Logika lain yang perlu dijalankan saat aplikasi dimulai bisa ditambahkan di sini
    
    // Muat halaman berdasarkan hash yang ada saat ini
    Router();
}

// Event listener untuk memuat ulang konten jika hash berubah
window.addEventListener('hashchange', Router);

// Jalankan fungsi init saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', init);
