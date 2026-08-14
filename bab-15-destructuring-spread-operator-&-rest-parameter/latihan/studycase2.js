const keranjangA = ["Keyboard", "Mouse"];

const keranjangB = ["Monitor", "Headset"];

const gabungan = [...keranjangA, ...keranjangB];
console.log(gabungan);

const [pertama,kedua,terakhir]=gabungan
console.log("Produk pertama     :",pertama);
console.log("Produk kedua       :",kedua);
console.log("Produk terakhir    :",terakhir);