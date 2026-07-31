let totalBelanja = 320000;
let presentaseDiskon;
let jumlahDiskon;
let totalDibayar;

if (totalBelanja >= 500000) {
    presentaseDiskon = 20 / 100;
} else if (totalBelanja >= 250000) {
    presentaseDiskon = 10 / 100;
} else {
    presentaseDiskon = 0;
}

jumlahDiskon = totalBelanja * presentaseDiskon;
totalDibayar = totalBelanja - jumlahDiskon;

console.log("Persentase Diskon :", presentaseDiskon * 100 + "%");
console.log("Jumlah Diskon     :", jumlahDiskon);
console.log("Total Dibayar     :", totalDibayar);