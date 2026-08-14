const timFrontend = [
  "Budi",
  "Andi",
  "Citra",
];

const timBackend = [
  "Doni",
  "Eko",
];

const seluruhTim = [...timFrontend,...timBackend,"Fajar"]
function tampilkanTim(...seluruhTim){
    for(let i=0; i<seluruhTim.length; i++){
        console.log(i + 1 + "." + " " +seluruhTim[i])
    }
}

console.log("==================")
console.log("       TIM A      ")
console.log("==================")
tampilkanTim(...seluruhTim)