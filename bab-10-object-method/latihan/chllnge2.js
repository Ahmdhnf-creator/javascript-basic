const produk = {
    nama    : "CALLE T-Shirt polos",
    harga   : 799999,
    stok    : 500,
    tambahStok(jumlah){
        this.stok += jumlah
    },
    kurangiStok(jumlah){
        this.stok -= jumlah
    },  
    tampilkanInfo(){
        console.log("Nama   :",produk.nama)
        console.log("Harga  :",produk.harga)
        console.log("Stok   :",produk.stok)
    }

}

produk.tambahStok(10);
produk.kurangiStok(3);

produk.tampilkanInfo();