console.log(Number("42px")); // output eror karena Number lebih kompleks ketimbang parseInt jadi apabila terdapat selain angka pada string dia akan eror
console.log(parseInt("42px"));// output 42, karena parseInt hanya melihat angka pada string maka untuk selain angka diabaikan dan tidak terjadi eror
