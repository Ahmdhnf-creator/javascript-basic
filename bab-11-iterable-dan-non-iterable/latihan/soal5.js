const nilai = [90, 80, 85, 100, 95];
let jumlahNilai = 0

for (let nilaiPelajaran of nilai){
    jumlahNilai += nilaiPelajaran
};


let rataRata = jumlahNilai / nilai.length
console.log("Jumlah nilai siswa     :",jumlahNilai);
console.log("Rata-rata nilai siswa  :",rataRata);

