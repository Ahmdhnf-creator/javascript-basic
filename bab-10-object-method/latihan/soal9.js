 const akunBank={
    pemilik : "Budi",
    saldo : 250000000,
    setor: function(jumlah){
        this.saldo += jumlah
        return this.saldo
    }
 }

 let jumlah=200000000

 console.log("Saldo Awal        :",akunBank.saldo)
 console.log("Setor             :",jumlah)
 console.log("Saldo Sekarang    :",akunBank.setor(jumlah))
