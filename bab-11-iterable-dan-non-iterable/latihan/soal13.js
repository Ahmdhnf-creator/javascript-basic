const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

console.log("====== BIODATA ======")
for (let penyebut in biodata){
        console.log(penyebut + "  :" + biodata[penyebut])
};
console.log("======================");