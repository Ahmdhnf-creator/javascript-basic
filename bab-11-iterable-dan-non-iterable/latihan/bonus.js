const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};
kelas.ruangan = "Lab komputer"
for(let penyebut in kelas){
    console.log(penyebut + ":" +kelas[penyebut])
}