function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();

//output
// 1
// 2

// 1

// 3
// 2

// kenapa hitungan A dan B tidak menggunakan hitungan yg sama? alasanya karena beda tempat penyimpan sehingga sistem membaca itu adalah suatu hal yang baru.