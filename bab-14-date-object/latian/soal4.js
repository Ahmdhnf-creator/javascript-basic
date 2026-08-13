const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const sekarang = new Date();
const hari = namaHari[sekarang.getDay()];

console.log("Hari :",hari)