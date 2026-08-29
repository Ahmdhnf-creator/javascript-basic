let datauser = [];

let favorit = JSON.parse(localStorage.getItem("favorit")) || [];

const namaIndonesia = [
  "Ahmad Fauzan",
  "Muhammad Rizky",
  "Fajar Ramadhan",
  "Dimas Pratama",
  "Rizky Maulana",
  "Andi Setiawan",
  "Bagas Saputra",
  "Ilham Akbar",
  "Arif Hidayat",
  "Bima Nugraha",
];

// Mengambil data user
async function ambilData() {
  const loading = document.querySelector("#loading");

  const error = document.querySelector("#error");

  loading.textContent = "Memuat data...";
  error.textContent = "";

  try {
    const dataSimpan = localStorage.getItem("usersData");

    if (dataSimpan) {
      datauser = JSON.parse(dataSimpan);

      tampilkanUser(datauser);
      cekURL();

      return;
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    const data = await response.json();

    datauser = data;

    localStorage.setItem("usersData", JSON.stringify(datauser));

    tampilkanUser(datauser);
    cekURL();
  } catch (err) {
    error.textContent = "Maaf, data pengguna gagal dimuat.";

    console.log(err);
  } finally {
    loading.textContent = "";
  }
}

// Menampilkan user
function tampilkanUser(data) {
  const user = document.querySelector("#user");

  user.innerHTML = "";

  if (data.length === 0) {
    user.innerHTML = `
      <p style="text-align: center;">
        Tidak ada pengguna.
      </p>
    `;

    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("card");

    const isFavorit = favorit.includes(item.id);

    const nama =
      item.nama || (item.id <= 10 ? namaIndonesia[item.id - 1] : item.name);

    const email = item.email || "Tidak ada email";

    card.innerHTML = `
      <button
        class="favorit"
        data-id="${item.id}"
      >
        ${isFavorit ? "★" : "☆"}
      </button>

      <button
        class="hapus"
        data-id="${item.id}"
      >
        Hapus
      </button>

      <button
        class="edit"
        data-id="${item.id}"
      >
        Edit
      </button>

      <h2>${nama}</h2>

      <p>
        ${email}
      </p>
    `;

    // Membuka detail
    card.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("favorit") ||
        event.target.classList.contains("hapus") ||
        event.target.classList.contains("edit")
      ) {
        return;
      }

      tampilkanDetail(item.id);
    });

    // Favorit
    const tombolFavorit = card.querySelector(".favorit");

    tombolFavorit.addEventListener("click", (event) => {
      event.stopPropagation();

      tambahFavorit(item.id);
    });

    // Hapus
    const tombolHapus = card.querySelector(".hapus");

    tombolHapus.addEventListener("click", (event) => {
      event.stopPropagation();

      hapusUser(item.id);
    });

    // Edit
    const tombolEdit = card.querySelector(".edit");

    tombolEdit.addEventListener("click", (event) => {
      event.stopPropagation();

      editUser(item.id);
    });

    user.appendChild(card);
  });
}

// Favorit
function tambahFavorit(id) {
  if (favorit.includes(id)) {
    favorit = favorit.filter((item) => item !== id);
  } else {
    favorit.push(id);
  }

  localStorage.setItem("favorit", JSON.stringify(favorit));

  tampilkanUser(datauser);
}

// Hapus user
function hapusUser(id) {
  const user = datauser.find((item) => item.id === id);

  if (!user) {
    return;
  }

  const nama = user.nama || (id <= 10 ? namaIndonesia[id - 1] : user.name);

  const konfirmasi = confirm(`Apakah kamu yakin ingin menghapus ${nama}?`);

  if (!konfirmasi) {
    return;
  }

  datauser = datauser.filter((item) => item.id !== id);

  favorit = favorit.filter((item) => item !== id);

  localStorage.setItem("usersData", JSON.stringify(datauser));

  localStorage.setItem("favorit", JSON.stringify(favorit));

  tampilkanUser(datauser);
}

// Edit user
function editUser(id) {
  const user = datauser.find((item) => item.id === id);

  if (!user) {
    return;
  }

  const namaLama = user.nama || (id <= 10 ? namaIndonesia[id - 1] : user.name);

  const emailLama = user.email || "";

  const namaBaru = prompt("Masukkan nama baru:", namaLama);

  if (namaBaru === null) {
    return;
  }

  const emailBaru = prompt("Masukkan email baru:", emailLama);

  if (emailBaru === null) {
    return;
  }

  if (!namaBaru.trim()) {
    alert("Nama tidak boleh kosong.");

    return;
  }

  if (!emailBaru.trim()) {
    alert("Email tidak boleh kosong.");

    return;
  }

  user.nama = namaBaru.trim();

  user.email = emailBaru.trim();

  localStorage.setItem("usersData", JSON.stringify(datauser));

  tampilkanUser(datauser);
}

// Pencarian
const cari = document.querySelector("#cari");

cari.addEventListener("input", () => {
  const kata = cari.value.toLowerCase().trim();

  const hasil = datauser.filter((item) => {
    const nama =
      item.nama || (item.id <= 10 ? namaIndonesia[item.id - 1] : item.name);

    const email = item.email || "";

    return (
      nama.toLowerCase().includes(kata) || email.toLowerCase().includes(kata)
    );
  });

  tampilkanUser(hasil);
});

// Detail user
function tampilkanDetail(id) {
  const user = document.querySelector("#user");

  const detail = document.querySelector("#detail");

  const detailuser = document.querySelector("#detailuser");

  const data = datauser.find((item) => item.id === id);

  if (!data) {
    return;
  }

  const nama = data.nama || (id <= 10 ? namaIndonesia[id - 1] : data.name);

  const email = data.email || "Tidak ada email";

  detailuser.innerHTML = `
    <h2>${nama}</h2>

    <p>
      <strong>Email:</strong>
      ${email}
    </p>
  `;

  user.style.display = "none";

  detail.style.display = "block";

  location.hash = `user/${id}`;
}

// Mengecek URL
function cekURL() {
  const hash = location.hash;

  if (hash.startsWith("#/user/")) {
    const id = Number(hash.split("/")[2]);

    const userAda = datauser.some((item) => item.id === id);

    if (userAda) {
      tampilkanDetail(id);
    } else {
      tampilkanDaftar();
    }
  } else {
    tampilkanDaftar();
  }
}

// Tombol kembali
const kembali = document.querySelector("#kembali");

kembali.addEventListener("click", () => {
  location.hash = "";

  tampilkanDaftar();
});

window.addEventListener("hashchange", () => {
  cekURL();
});

// Menampilkan daftar
function tampilkanDaftar() {
  const user = document.querySelector("#user");

  const detail = document.querySelector("#detail");

  user.style.display = "grid";

  detail.style.display = "none";

  tampilkanUser(datauser);
}

// Tema
const tema = document.querySelector("#tema");

tema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");

  const gelap = document.body.classList.contains("gelap");

  localStorage.setItem("tema", gelap ? "gelap" : "terang");

  tema.textContent = gelap ? "terang" : "gelap";
});

// Tema tersimpan
const temaSimpan = localStorage.getItem("tema");

if (temaSimpan === "gelap") {
  document.body.classList.add("gelap");

  tema.textContent = "terang";
}

// Tambah user
const tombolTambah = document.querySelector("#tambah");

const formTambah = document.querySelector("#formTambah");

const namaBaru = document.querySelector("#namaBaru");

const emailBaru = document.querySelector("#emailBaru");

const simpanUser = document.querySelector("#simpanUser");

const batalUser = document.querySelector("#batalUser");

tombolTambah.addEventListener("click", () => {
  formTambah.style.display = "block";
});

batalUser.addEventListener("click", () => {
  formTambah.style.display = "none";

  namaBaru.value = "";
  emailBaru.value = "";
});

simpanUser.addEventListener("click", () => {
  const nama = namaBaru.value.trim();

  const email = emailBaru.value.trim();

  if (!nama) {
    alert("Nama wajib diisi.");

    return;
  }

  if (!email) {
    alert("Email wajib diisi.");

    return;
  }

  const id =
    datauser.length > 0 ? Math.max(...datauser.map((item) => item.id)) + 1 : 1;

  const userBaru = {
    id: id,
    nama: nama,
    email: email,
  };

  datauser.push(userBaru);

  localStorage.setItem("usersData", JSON.stringify(datauser));

  namaBaru.value = "";
  emailBaru.value = "";

  formTambah.style.display = "none";

  tampilkanUser(datauser);
});

// Jalankan program
ambilData();
