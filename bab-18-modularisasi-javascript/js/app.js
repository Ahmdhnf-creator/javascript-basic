import { produk, cariProduk } from "./produk.js";

import formatRupiah, {
  hitungSubtotal,
  hitungTotal
} from "./transaksi.js";

// DAFTAR PRODUK
const tampilkanProduk = document.querySelector(".daftarproduk");

produk.forEach((item, index) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <span>
      <span class="nomor">${index + 1}</span>
      ${item.nama}
    </span>

    <strong>
      ${formatRupiah(item.harga)}
    </strong>
  `;

  tampilkanProduk.appendChild(li);
});

// TRANSAKSI
const produkDibeli = cariProduk(1);
const jumlah = 5;

const subtotal = hitungSubtotal(
  produkDibeli.harga,
  jumlah
);

// TAMPILKAN STRUK
document.querySelector("#nama-produk").textContent =
  produkDibeli.nama;

document.querySelector("#harga-produk").textContent =
  formatRupiah(produkDibeli.harga);

document.querySelector("#jumlah-produk").textContent =
  jumlah;

document.querySelector("#subtotal-produk").textContent =
  formatRupiah(subtotal);

// TRANSAKSI FINAL
const transaksi = [
  {
    nama: "Keyboard",
    harga: 250000,
    jumlah: 2,
    subtotal: hitungSubtotal(250000, 2)
  },

  {
    nama: "Mouse",
    harga: 150000,
    jumlah: 1,
    subtotal: hitungSubtotal(150000, 1)
  },

  {
    nama: "Headset",
    harga: 300000,
    jumlah: 1,
    subtotal: hitungSubtotal(300000, 1)
  }
];

// HITUNG TOTAL
const total = hitungTotal(transaksi);

// TAMPILKAN TOTAL
document.querySelector("#total-transaksi").textContent =
  formatRupiah(total);

// CONSOLE
console.log("========== DAFTAR PRODUK ==========");

produk.forEach((item, index) => {
  console.log(
    `${index + 1}. ${item.nama} - ${formatRupiah(item.harga)}`
  );
});

console.log("");

console.log("========== STRUK TRANSAKSI ==========");
console.log("Produk   :", produkDibeli.nama);
console.log("Harga    :", formatRupiah(produkDibeli.harga));
console.log("Jumlah   :", jumlah);
console.log("Subtotal :", formatRupiah(subtotal));

console.log("");

console.log("========== TOTAL TRANSAKSI ==========");
console.log("Total :", formatRupiah(total));