function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token:", tokenSesi);
}

prosesLogin();

console.log(tokenSesi);

// tokenSesi tidak dapat digunakan dari luar fungsi karena variabel tersebut dibuat di dalam function prosesLogin(), sehingga memiliki function/local scope. Variabel tersebut hanya dapat diakses dari dalam function tersebut.

// Agar namaUser dapat digunakan baik di dalam maupun di luar fungsi, variabel tersebut dibuat di luar function sehingga berada di global scope.