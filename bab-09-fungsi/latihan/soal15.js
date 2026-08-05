function hitungBMI(berat, tinggi){
    return berat/(tinggi*tinggi)
}
let berat = 65;
let tinggi = 1.7;

console.log(hitungBMI(berat,tinggi).toFixed(2))