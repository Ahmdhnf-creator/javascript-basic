const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));


// 1. Di mana pajak dibuat?
// 2. Di mana totalPajak dibuat?
// 3. Mengapa hitungHarga() dapat menggunakan pajak?
// 4. Apakah totalPajak dapat digunakan di luar fungsi?

// 1. globalscope
// 2. localscope
// 3. karena pajak berada diluar yang dimana bagian dalam dapat menemukan bagian luar akan tetapi bagian luar tidak dapat menemukan bagian dalam
// 4. tidak bisa