# Bab 3 - Variabel

## Tujuan

Setelah menyelesaikan latihan ini, kamu diharapkan mampu:

- Membuat variabel menggunakan `let` dan `const`
- Memilih kapan menggunakan `let` atau `const`
- Memberikan nama variabel sesuai standar `camelCase`
- Menggunakan variabel dalam program sederhana

---

# Cara Mengerjakan

1. Fork repository ini ke akun GitHub milikmu.
2. Clone repository hasil fork.
3. Kerjakan setiap latihan pada folder yang telah disediakan.
4. Jangan mengubah nama folder maupun nama file.
5. Commit setiap latihan yang telah selesai.
6. Push ke repository milikmu.

---

# Struktur Folder

```
bab-03-variable/

├── materi.md
├── soal.md
└── latihan/
    ├── latihan-01/
    │   └── index.js
    ├── latihan-02/
    │   └── index.js
    ├── latihan-03/
    │   └── index.js
    ├── latihan-04/
    │   └── index.js
    ├── latihan-05/
    │   └── index.js
    ├── challenge-01/
    │   └── index.js
    └── challenge-02/
        └── index.js
```

---

# Latihan 1 — Biodata

Folder:

```
latihan/latihan-01
```

## Tugas

Buatlah variabel berikut.

- namaLengkap
- umur
- kota
- pekerjaan

Gunakan keyword yang sesuai (`let` atau `const`).

Kemudian tampilkan hasilnya menggunakan `console.log()`.

Contoh output:

```
===== BIODATA =====

Nama : Budi Santoso
Umur : 20
Kota : Yogyakarta
Pekerjaan : Mahasiswa
```

---

# Latihan 2 — Mengubah Nilai Variabel

Folder:

```
latihan/latihan-02
```

## Tugas

Buat variabel

```
saldo
```

dengan nilai awal

```
100000
```

Kemudian tambahkan saldo sebesar

```
50000
```

Lalu tampilkan hasil akhirnya.

Output:

```
Saldo Awal : 100000

Saldo Akhir : 150000
```

Gunakan keyword yang tepat.

---

# Latihan 3 — Total Belanja

Folder:

```
latihan/latihan-03
```

## Tugas

Buat variabel:

- namaProduk
- hargaSatuan
- jumlahDibeli

Hitung total harga.

Tampilkan hasilnya.

Contoh:

```
Produk : Buku

Harga : 10000

Jumlah : 3

Total : 30000
```

---

# Latihan 4 — Menghitung Umur

Folder:

```
latihan/latihan-04
```

## Tugas

Buat variabel:

- nama
- tahunLahir
- tahunSekarang

Hitung umur menggunakan rumus

```
umur = tahunSekarang - tahunLahir
```

Kemudian tampilkan hasilnya.

---

# Latihan 5 — Konversi Nilai

Folder:

```
latihan/latihan-05
```

## Tugas

Buat variabel:

- nilaiMatematika
- nilaiIPA
- nilaiBahasaIndonesia

Hitung rata-rata nilai.

Tampilkan hasilnya.

---

# Challenge 1 — Kasir Sederhana

Folder:

```
challenge-01
```

Buat program kasir sederhana.

Variabel:

- namaProduk
- hargaSatuan
- jumlahDibeli
- tarifPajak

Hitung:

- subtotal
- pajak
- totalBayar

Contoh output:

```
========== STRUK ==========

Produk : Buku Tulis

Harga : 8000

Jumlah : 5

Subtotal : 40000

Pajak : 4400

Total : 44400
```

Gunakan `const` sebanyak mungkin.

---

# Challenge 2 — Profil Pengguna

Folder:

```
challenge-02
```

Buat program yang menampilkan profil seseorang.

Minimal memiliki:

- Nama Lengkap
- Umur
- Kota
- Email
- Hobi
- Cita-cita

Gunakan nama variabel yang jelas dan mengikuti aturan camelCase.

Output bebas, tetapi harus rapi dan mudah dibaca.

---

# Ketentuan Penilaian

## Penamaan Variabel (20 poin)

- Menggunakan camelCase
- Nama variabel jelas dan mudah dipahami

---

## Penggunaan let dan const (30 poin)

- Menggunakan `const` untuk nilai yang tidak berubah
- Menggunakan `let` jika nilai berubah

---

## Kerapian Kode (20 poin)

- Indentasi rapi
- Mudah dibaca
- Tidak ada kode yang tidak digunakan

---

## Output Program (30 poin)

- Program berjalan tanpa error
- Output sesuai dengan instruksi

---

# Bonus (+10 poin)

Perbaiki kode berikut agar mengikuti standar JavaScript modern.

```javascript
var Nama = "Budi";

var umur = 20;

var Kota = "Bandung";

umur = 21;

console.log(Nama);

console.log(umur);

console.log(Kota);
```

Perbaikan yang diharapkan:

- Gunakan `let` atau `const`.
- Gunakan penamaan `camelCase`.
- Rapikan penulisan kode.