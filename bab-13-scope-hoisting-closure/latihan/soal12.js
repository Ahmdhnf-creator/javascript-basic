function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitung = buatPenghitung();

penghitung();
penghitung();
penghitung();

// output
// 1
// 2
// 3


// Di mana variabel hitungan dibuat? => di localscope
// Mengapa hitungan masih bisa digunakan setelah buatPenghitung() selesai? => karena sistem masih mengingat variabel
// Fungsi mana yang mengingat hitungan? => fungsi dalam
