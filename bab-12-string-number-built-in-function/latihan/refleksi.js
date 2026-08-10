// 🧠 Pertanyaan Refleksi
// Setelah menyelesaikan soal, jawab:

// 1. Mengapa input dari pengguna biasanya perlu dibersihkan menggunakan .trim()?
// 2. Apa perbedaan .replace() dan .replaceAll()?
// 3. Apa perbedaan parseInt() dan parseFloat()?
// 4. Kapan Number() lebih cocok digunakan?
// 5. Mengapa .toFixed() menghasilkan String?
// 6. Mengapa .toLowerCase() berguna ketika membuat fitur pencarian?
// 7. Menurutmu, method mana yang paling sering digunakan dalam aplikasi nyata? Jelaskan alasannya.


//1. untuk menghilangkan spasi yang disengaja atau tidak pada awal atau akhir teks
//2. .replace() => berfungsi untu mengganti kata tertentu ke kata yang kita inginkan, akan tetapi tidak semua kata yang sama, hanyal satu diawal
//   .replaceAll => berfungsi untu mengganti kata tertentu ke kata yang kita inginkan, dan ini akan mengganti seluruh kata yang sama
//3. parseInt() => mengganti nomor yang berada di dalam string menjadi number bilangan bulat(jika desimal maka koma akan hilang beserta angka di belakangnya)
//   parseFloat() => mengganti nomor desimal yang berada di dalam string menjadi number (desimal)
//4. Number cocok digunakan pada string yang full angka
//5. karena emng digunakan untuk merancang angka menjadi tampilan dengan jumlah angka desimal tertentu, bukan untuk perhitungkan
//6. supaya memudahkan pencari mencari kata yang diinginkan menggunakan keyword, repot apabila tidak menggunakan lower maka kata yang seharusnya sama tidak akan muncul dikarenakan beda huruf besar dan kecil
//7. menurut saya method yang vital sering digunakan adala includes() dan indexOf() dikarenakan dalam pendataan pasti kita sulit untuk menghafal lokasi atau ada tidaknya sesuatu yang kita data maka dari itu ke dua ini sangat dibutuhkan.