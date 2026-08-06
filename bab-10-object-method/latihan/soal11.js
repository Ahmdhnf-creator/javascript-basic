const game ={
    pemain          : "Gondrong",
    nyawa           : 100,
    terkenaSerangan : function(damage){
        this.nyawa -= damage
    }
}

console.log("Nyawa awal     :",game.nyawa)
game.terkenaSerangan(57)
console.log("Nyawa sekarang :",game.nyawa)