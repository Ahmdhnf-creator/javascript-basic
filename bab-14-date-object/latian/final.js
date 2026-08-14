const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date("2026-08-13");

console.log("===== DAFTAR TUGAS =====");

for (let i = 0; i < tugas.length; i++) {
  const deadline = new Date(tugas[i].deadline);

  const selisih =
    (deadline.getTime() - sekarang.getTime()) / (1000 * 60 * 60 * 24);

  console.log(i + 1 + ". " + tugas[i].nama);

  console.log(
    "   Deadline:",
    deadline.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );

  if (selisih < 0) {
    console.log("   Status  : Deadline sudah terlewat.");
  } else {
    console.log("   Status  :", selisih, "hari lagi");
  }
}
