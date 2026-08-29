export function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}

export default function formatRupiah(harga) {
  return "Rp" + harga.toLocaleString("id-ID");
}

export function hitungTotal(transaksi) {
  let total = 0;

  transaksi.forEach((item) => {
    total += item.subtotal;
  });

  return total;
}