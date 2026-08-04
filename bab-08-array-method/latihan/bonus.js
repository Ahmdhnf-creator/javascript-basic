let playlist = [];

playlist.push("A","B","C","D","E")
playlist.pop()
playlist.unshift("New")
for(i = 0; i < playlist.length; i++){
    console.log(i + 1 + ".", playlist[i])
}
console.log("Total Lagu :",playlist.length)