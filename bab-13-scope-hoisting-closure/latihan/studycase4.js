function buatKeranjang() {
  let items = [];

  return {
    tambah(nama, harga) {
      items.push({
        nama: nama,
        harga: harga,
      });
    },

    hapus(nama) {
      items = items.filter(function (item) {
        return item.nama !== nama;
      });

      console.log(nama + " berhasil dihapus.");
    },

    lihatKeranjang() {
      console.log("===== KERANJANG =====");

      for (let i = 0; i < items.length; i++) {
        console.log(i + 1 + ". " + items[i].nama + " - Rp" + items[i].harga);
      }
    },

    hitungTotal() {
      let total = 0;

      for (let i = 0; i < items.length; i++) {
        total += items[i].harga;
      }

      return total;
    },

    jumlahItem() {
      return items.length;
    },
  };
}

const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

console.log("Total:", keranjang.hitungTotal());

console.log("Jumlah item:", keranjang.jumlahItem());
