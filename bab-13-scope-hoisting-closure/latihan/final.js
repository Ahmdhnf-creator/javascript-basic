function buatAkun(nama, saldoAwal) {
  let saldo = saldoAwal;

  return {
    lihatProfil() {
      console.log("===== PROFIL =====");
      console.log("Nama:", nama);
    },

    cekSaldo() {
      console.log("Saldo: Rp" + saldo);
    },

    tambahSaldo(jumlah) {
      saldo += jumlah;

      console.log("Saldo berhasil ditambahkan.");
      console.log("Saldo sekarang: Rp" + saldo);
    },

    kurangiSaldo(jumlah) {
      if (jumlah > saldo) {
        console.log("Saldo tidak mencukupi.");
        return;
      }

      saldo -= jumlah;

      console.log("Saldo berhasil dikurangi.");
      console.log("Saldo sekarang: Rp" + saldo);
    },
  };
}

const akunBudi = buatAkun("Budi", 100000);
const akunAni = buatAkun("Ani", 500000);

akunBudi.lihatProfil();
akunBudi.cekSaldo();

akunBudi.tambahSaldo(50000);

akunBudi.kurangiSaldo(25000);

akunBudi.cekSaldo();

console.log("================");

akunAni.lihatProfil();
akunAni.cekSaldo();

akunAni.tambahSaldo(100000);

akunAni.cekSaldo();
