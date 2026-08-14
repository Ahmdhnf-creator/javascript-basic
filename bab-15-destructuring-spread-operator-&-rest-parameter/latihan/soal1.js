const pengguna = {
  nama: "Budi Santoso",
  email: "budi@email.com",
  umur: 20,
  kota: "Jakarta",
};

const profilBaru = {...pengguna,
    kota: "Bandung",
    status: "Aktif"
};

console.log(profilBaru);