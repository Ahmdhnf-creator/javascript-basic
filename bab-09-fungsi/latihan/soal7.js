function cekKelulusan(nilai){
    if (nilai >= 75){
        return "Lulus"
    }
    return "Tidak lulus"
}

console.log(cekKelulusan(90))
console.log(cekKelulusan(46))