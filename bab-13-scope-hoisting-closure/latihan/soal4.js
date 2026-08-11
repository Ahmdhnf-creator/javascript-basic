const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

//output 
//Dalam
//Luar 
//Global
//Alesan : secara garis besar consolelog akan melihat variabel yang seblock dulu jikalau tidak ada dia akan keluar mencari
