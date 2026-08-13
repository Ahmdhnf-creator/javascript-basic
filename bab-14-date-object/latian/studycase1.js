function sisaMenujuDeadline(deadline) {
  const sekarang = new Date("2026-08-13");

  const selisih =
    (deadline.getTime() - sekarang.getTime()) / (1000 * 60 * 60 * 24);

  if (selisih < 0) {
    return "Deadline sudah terlewat.";
  }

  return selisih+" hari lagi."
}

const deadline = new Date("2026-08-20");

console.log(
  "Deadline:",
  deadline.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

console.log("Sisa waktu:", sisaMenujuDeadline(deadline));
