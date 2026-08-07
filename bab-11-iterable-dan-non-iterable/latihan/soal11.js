const angka = [10, 20, 30];

for (let item in angka) {
  console.log(item);
}

// 0
// 1
// 2
// berbeda karena array termasuk iterable jadi tidak cocok menggunakan in dan apabila dicoba hasilnya akan menghitung indeks dari array tsb
