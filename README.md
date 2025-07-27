Automation Testing dengan Playwright (JavaScript) + POM + CI/CD

Proyek ini merupakan implementasi automation testing menggunakan Playwright berbasis JavaScript, dengan pendekatan Page Object Model (POM) untuk menjaga struktur kode yang rapi dan mudah dipelihara.
secara otomatis menangkap screenshot saat terjadi error atau kegagalan pada test. File screenshot akan disimpan ke dalam folder screenshots/ dan dapat digunakan untuk membantu proses debugging.
Pengujian ini ditujukan untuk website SauceDemo dan sudah terintegrasi dengan CI/CD pipeline, sehingga test akan berjalan otomatis setiap ada perubahan kode.

Fitur yang diuji:
1. Login: Pengujian autentikasi dengan kredensial valid dan tidak valid.
2. Inventory: Verifikasi tampilan dan interaksi daftar produk.
3. Cart: Pengujian penambahan dan penghapusan item dari keranjang.
4. Checkout: Validasi proses checkout hingga konfirmasi pembelian.
