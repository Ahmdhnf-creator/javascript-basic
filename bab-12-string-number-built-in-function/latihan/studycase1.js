const username = "   BUDI123   ";

function validasi (username){
const usernameBersih = username.trim()
const usernameKecil = usernameBersih.toLowerCase()
const validasiUser = usernameKecil
console.log("Username :",validasiUser)
if (validasiUser.length < 5){
    console.log("Username Terlalu Pendek!")
} 
else{
    console.log("Username Valid!")
}
}

validasi("  AB  ")