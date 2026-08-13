const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");
const selisih = (deadline-sekarang)/(1000*60*60*24)


console.log("Deadline       :",deadline.toLocaleDateString("id-ID",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}))

console.log("Sisa waktu     :",selisih,"hari lagi")