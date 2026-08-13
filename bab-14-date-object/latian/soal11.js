const tahunLahir = 2008;

const lahir = new Date(tahunLahir, 0, 1);
const sekarang = new Date();
const umur = sekarang.getFullYear() - lahir.getFullYear();

console.log("Umur :",umur,"tahun");