let saldo = 150000;
let tarikTunai = 100000;
let sisaSaldo = saldo - tarikTunai

if (tarikTunai <= saldo){
    console.log("Penarikan Berhasil")
    console.log("Sisa Saldo :", sisaSaldo)
}
else{
    console.log("Saldo Tidak Mencukupi")
}