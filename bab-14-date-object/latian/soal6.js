function penanggalan(date){
    const tgl = String(date.getDate()).padStart(2,"0");
    const bln = String(date.getMonth()).padStart(2,"0");
    const thn = date.getFullYear();
    return tgl + "/" + bln + "/" + thn;
}

const tanggal = new Date("2026-08-17");
console.log(penanggalan(tanggal))