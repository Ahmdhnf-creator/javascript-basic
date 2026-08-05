function hitungNilaiAkhir(tugas, uts, uas) {
  let nilaiAkhir = (tugas + uts + uas) / 3;

  if (nilaiAkhir >= 75) {
    return "Lulus";
  }

  return "Tidak Lulus";
}

let tugas   = 90
let uts     = 88
let uas     = 78 
let nilaiAkhir= (tugas + uts + uas)/3

console.log("Nilai Akhir    :", nilaiAkhir)
console.log("Status         :", hitungNilaiAkhir(tugas,uts,uas));
