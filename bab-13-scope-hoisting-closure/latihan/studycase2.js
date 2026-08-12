function buatRekening(saldoAwal) {
    let saldo = saldoAwal;
    return {
        cekSaldo() {
            console.log("Saldo saat ini:", saldo);
        },
        setor(jumlah) {
            saldo += jumlah;
            console.log("Setoran berhasil, Saldo:", saldo);
        },
        tarik(jumlah) {
            saldo -= jumlah;
            console.log("Penarikan berhasil, Saldo:", saldo);
        }
    };
}

const rekening = buatRekening(1000000);

rekening.cekSaldo();
rekening.setor(500000);
rekening.tarik(200000);
rekening.cekSaldo();