

function hitungKata(kata) {
    // hitung jumlah kata yang di input 

    let jumlahKata = 0;
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] === ' ') {
            jumlahKata++;
        }
    }
    return jumlahKata + 1
}



function hitungJumlahString(str) {
    // hitung jumlah sting yang di input 
    let jumlahString = 0;
    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] === 'string') {
            jumlahString++;
        }
    }
    
    let jumlahkata = hitungKata(str);

    console.log("jumlah string" + jumlahString);
    console.log("jumlah kata" + jumlahkata);
   
}

    let jumlahkata = hitungKata("hitung kata");
    console.log(jumlahkata);




