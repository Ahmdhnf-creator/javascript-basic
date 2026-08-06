const biodata = {
    nama        : "Budi Simanjuntak",
    umur        : 25,
    pekerjaan   : "AI Engineer",
    kota        : "Semarang",
    tampilkanBiodata(){
        console.log("============ BIODATA =============")
        console.log("Nama       :",biodata.nama)
        console.log("Umur       :",biodata.umur)
        console.log("Pekerjaan  :",biodata.pekerjaan)
        console.log("Kota       :",biodata.kota)
        console.log("==================================")
    }
}

biodata.tampilkanBiodata()