// Data siswa
let nilai = 85;
let kehadiran = 90;
let umur = 18;
let poinBonus = 5;

// Operator Assignment
nilai += poinBonus;

// Operator Aritmatika
let rataRata = (nilai + kehadiran) / 2;
let sisaUmur = umur % 2;

// Operator Perbandingan
let nilaiMemenuhi = rataRata >= 80;
let umurMemenuhi = umur <= 25;

// Operator Logika
let lolosBeasiswa = nilaiMemenuhi && umurMemenuhi;
let dapatSertifikat = nilaiMemenuhi || kehadiran >= 95;

// Output
console.log("=== HASIL SELEKSI BEASISWA ===");
console.log("Nilai Setelah Bonus :", nilai);
console.log("Rata-rata           :", rataRata);
console.log("Sisa Umur % 2       :", sisaUmur);
console.log("Nilai Memenuhi      :", nilaiMemenuhi);
console.log("Umur Memenuhi       :", umurMemenuhi);
console.log("Lolos Beasiswa      :", lolosBeasiswa);
console.log("Dapat Sertifikat    :", dapatSertifikat);