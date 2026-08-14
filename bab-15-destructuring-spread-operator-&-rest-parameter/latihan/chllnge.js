const nilai = [80, 90, 75, 95, 85];

function prosesNilai(...nilai) {
  console.log("Nilai tertinggi      =", Math.max(...nilai));
  console.log("Nilai terendah       =", Math.min(...nilai));
}

function jumlah(...nilai){
    return nilai.reduce((total,n) => total + n,0);
}

prosesNilai(...nilai);
console.log("Total nilai          =",jumlah(...nilai));