const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const namaEvent = "JavaScript Bootcamp";
const tanggalEvent = new Date("2026-09-05");
const hari = namaHari[tanggalEvent.getDay()];
const tgl = tanggalEvent.getDate();
const bln = namaBulan[tanggalEvent.getMonth()];
const thn = tanggalEvent.getFullYear();

console.log("=============================");
console.log("       INFORMASI EVENT       ")
console.log("=============================");
console.log("Nama Event :",namaEvent);
console.log("Hari       :",hari);
console.log("Tanggal    :",tgl,bln,thn)
console.log("=============================");
