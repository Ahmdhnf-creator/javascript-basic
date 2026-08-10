const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

function hasilNama(namaProduk) {
  const produkTrim = namaProduk.trim();
  const produkKapital = produkTrim
    .split(" ")
    .map((kata) => kata[0].toUpperCase() + kata.slice(1))
    .join(" ");
  console.log("Nama       :",produkKapital);
};

function hasilHarga(hargaProduk){
    const produkNumber = Number(hargaProduk)
    console.log("Harga      :","Rp",produkNumber)
};

console.log("===== DATA PRODUK =====")
hasilNama(namaProduk);
hasilHarga(hargaProduk);
console.log("Kode       :",kodeProduk)
console.log("=======================")
