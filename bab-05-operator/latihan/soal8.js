let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;
let bolehMasuk = sudahLogin || sudahVerifikasi //bolehMasuk bernilai true jika pengguna sudah login dan sudah verifikasi.
let dapatFiturPremium = premium || sudahVerifikasi//dapatFiturPremium bernilai true jika pengguna premium atau sudah verifikasi.

console.log(bolehMasuk)
console.log(dapatFiturPremium)
