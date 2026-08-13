const tanggalTransaksi = new Date("2026-08-13");
const jatuhTempo = new Date(tanggalTransaksi);
jatuhTempo.setDate(jatuhTempo.getDate()+7);

console.log(
  "Tanggal transaksi    :",
  tanggalTransaksi.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

console.log(
  "Jatuh tempo          :",
  jatuhTempo.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);