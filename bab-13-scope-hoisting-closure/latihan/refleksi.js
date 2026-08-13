// 1. Apa yang dimaksud dengan Scope?

// Scope itu batas dimana sebuah variabel bisa dipanggil atau digunakan. Jadi kita bisa tahu variabel itu bisa dibaca dari mana dan nggak bisa dibaca dari mana.

// 2. Apa perbedaan Global Scope dan Local Scope?

// Global Scope itu kalau variabel dibuat di luar function, jadi bisa dipakai dari berbagai tempat.
// Kalau Local Scope itu variabel yang dibuat di dalam function, jadi dari luar function nggak bisa langsung mengaksesnya.

// 3. Apa yang dimaksud dengan Block Scope?

// Block Scope itu scope yang ada di dalam { }. Tapi kalau pembahasan kita pakai let dan const, variabelnya hanya bisa digunakan di dalam block tersebut. Kalau var, dia masih bisa keluar dari block selama masih dalam function yang sama.

// 4. Apa itu Scope Chain?

// Scope Chain itu cara JavaScript mencari variabel. Kalau di scope sekarang nggak ada, dia akan mencari ke scope di luarnya. Jadi scope dalam bisa melihat scope luar, tapi scope luar nggak bisa melihat ke dalam.

// 5. Apa yang dimaksud dengan Hoisting?

// Hoisting itu ketika deklarasi variabel atau function diproses lebih dulu sebelum kode dijalankan. Makanya ada beberapa yang bisa digunakan sebelum ditulis deklarasinya.

// 6. Apa perbedaan hoisting var dengan let dan const?

// var bisa dipanggil sebelum deklarasinya, tapi nilainya undefined.

// Sedangkan let dan const kalau dipanggil sebelum deklarasinya akan error. Jadi walaupun deklarasinya sudah diproses, kita belum bisa menggunakannya sebelum baris deklarasinya.

// 7. Apa yang dimaksud dengan Closure?

// Closure itu ketika function yang ada di dalam function luar masih bisa menggunakan variabel dari function luar tersebut, walaupun function luarnya sudah selesai.

// Misalnya hitungan ada di buatCounter(), terus function dalamnya keluar dan disimpan di counter. Function itu masih bisa menggunakan hitungan. Nah, itu closure.

// 8. Mengapa Closure dapat digunakan untuk membuat data privat?

// Karena variabelnya dibuat di dalam function, jadi dari luar kita nggak bisa langsung mengambil atau mengubah variabel tersebut. Tapi kita bisa membuat function yang punya akses ke variabel itu untuk mengubah atau melihatnya.

// 9. Mengapa dua Closure yang dibuat dari fungsi yang sama dapat memiliki data yang berbeda?

// Karena ketika function pembuatnya dipanggil lagi, dia membuat variabel dan tempat penyimpanan yang baru.
