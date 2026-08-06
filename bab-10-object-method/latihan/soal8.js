const lampu ={
    warna: "putih",
    nyalakan: function(){
        console.log("Lampu berwarna "+this.warna+" menyala")
    }
}

lampu.warna ="merah"
lampu.nyalakan()