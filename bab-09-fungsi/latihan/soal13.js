const hitungSubtotal    = (harga,jumlah) => harga*jumlah;
const hitungPPN         =(subtotal, tarif = 11/100) => subtotal*tarif
const hitungTotal    =(subtotal,pajak) => subtotal+pajak

function cetakStruk (namaProduk,harga,jumlah){
const subtotal          = hitungSubtotal(harga,jumlah)
const pajak             = hitungPPN(subtotal)
const total             = hitungTotal(subtotal,pajak)

console.log("Produk     :",namaProduk)
console.log("Jumlah     ",jumlah)
console.log("Subtotal   :",subtotal)
console.log("PPN        :",pajak)
console.log("Total      :",total)

}

cetakStruk("speedcat",2999999,1);

