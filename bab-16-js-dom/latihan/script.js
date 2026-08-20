const santri = {
  nama: "Budi Santoso",
  kelas: "XI RPL",
  status: "Aktif",
};

const aktivitas = [
  "Login ke aplikasi",
  "Membaca materi JavaScript",
  "Mengerjakan latihan",
  "Mengumpulkan tugas",
];

const identitasSantri = document.querySelector(".Identitas");
const aktivitasSantri = document.querySelector(".Aktivitas");

const itemNama = document.createElement("li");
itemNama.textContent = "Nama  : " + santri.nama;
identitasSantri.appendChild(itemNama);

const itemKelas = document.createElement("li");
itemKelas.textContent = "Kelas  : " + santri.kelas;
identitasSantri.appendChild(itemKelas);

const itemStatus = document.createElement("li");
itemStatus.textContent = "Status  : " + santri.status;
identitasSantri.appendChild(itemStatus);

aktivitas.forEach(function (itemAktivitas) {
  const itemDua = document.createElement("li");
  itemDua.textContent = itemAktivitas;
  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.addEventListener("click", function () {
    itemDua.remove();
  });
  itemDua.appendChild(tombolHapus);
  aktivitasSantri.appendChild(itemDua);
});
