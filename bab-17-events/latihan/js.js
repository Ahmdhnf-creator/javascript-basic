const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputFilm = document.querySelector("#location");

const jumlahKarakter = document.querySelector("#char-count");
const keyMessage = document.querySelector("#key-message");

const daftarButton = document.querySelector(".btn-primary");
const resetButton = document.querySelector("#reset-btn");

const daftar = document.querySelector(".daftar");

let pesananList = [];

inputNama.addEventListener("input", function () {
  jumlahKarakter.textContent = "Jumlah karakter: " + inputNama.value.length;
});

inputNama.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    keyMessage.textContent = "Tombol Enter ditekan!";
  } else {
    keyMessage.textContent = "";
  }
});

daftarButton.addEventListener("click", function () {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const film = inputFilm.value.trim();

  if (nama === "" || email === "" || film === "") {
    alert("Nama, email, dan judul film wajib diisi!");

    return;
  }
  pesananList.push({
    nama: nama,
    email: email,
    film: film,
  });
  renderPesanan();
  inputNama.value = "";
  inputEmail.value = "";
  inputFilm.value = "";

  jumlahKarakter.textContent = "Jumlah karakter: 0";
  keyMessage.textContent = "";

  inputNama.focus();
});

// TAMPILKAN PESANAN
function renderPesanan() {
  daftar.innerHTML = "";

  pesananList.forEach(function (pesanan, index) {
    const item = document.createElement("div");
    item.className = "pesanan";

    const nama = document.createElement("p");
    nama.textContent = "Nama : " + pesanan.nama;

    const email = document.createElement("p");
    email.textContent = "Email : " + pesanan.email;

    const film = document.createElement("p");
    film.textContent = "Film : " + pesanan.film;

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    tombolHapus.addEventListener("click", function () {
      pesananList.splice(index, 1);

      renderPesanan();
    });

    item.appendChild(nama);
    item.appendChild(email);
    item.appendChild(film);
    item.appendChild(tombolHapus);

    daftar.appendChild(item);
  });
}

// RESET
resetButton.addEventListener("click", function () {
  inputNama.value = "";
  inputEmail.value = "";
  inputFilm.value = "";

  jumlahKarakter.textContent = "Jumlah karakter: 0";
  keyMessage.textContent = "";

  inputNama.focus();
});
