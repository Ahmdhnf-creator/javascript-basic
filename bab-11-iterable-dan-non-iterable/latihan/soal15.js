const nilai = [75, 90, 88, 100, 67, 95];

let terbesar = nilai[0];

for (let item of nilai) {
    if (item > terbesar) {
        terbesar = item;
    }
}

console.log("Nilai terbesar:", terbesar);