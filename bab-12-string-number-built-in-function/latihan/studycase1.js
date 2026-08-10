const username = "   BUDI123   ";

const usernameBersih = username.trim()
const usernameKecil = usernameBersih.toLowerCase()
const validasiUser = usernameKecil
console.log("Username :",validasiUser)
if (validasiUser.length < 5){
    console.log("Username Tidak Valid!")
} 
else{
    console.log("Username Valid!")
}
