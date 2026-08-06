const rekening = {
    pemilik : "Ahmad Hanif Abqari",
    saldo   : 235566000,
    setor(jumlah){
        this.saldo += jumlah
    },
    tarik(jumlah){
        this.saldo -= jumlah
        if (jumlah > this.saldo){
            console.log("Saldo tidak mencukupi.")
        }
        return;
    },
    cekSaldo(){
        console.log("Pemilik    :",rekening.pemilik)
        console.log("Saldo      :",rekening.saldo)
    }
}

rekening.setor(50000000)
rekening.cekSaldo()
rekening.tarik(15000000)
rekening.cekSaldo()
rekening.tarik(400000000)