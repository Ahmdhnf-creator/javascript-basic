let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];
inventaris.indexOf("Keyboard")
inventaris.includes("Printer")
inventaris.splice(1,1, "Headset")
inventaris.slice(2)

console.log(inventaris)
console.log(inventaris.indexOf("Keyboard"))
console.log(inventaris.includes("Printer"))
console.log(inventaris.slice(2))
