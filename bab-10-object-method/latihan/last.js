const playlist = {
    namaPlaylist    : "Playlistku",
    lagu            : ["a","b","c","d"],
    tambahLagu(judul){
        this.lagu.push(judul)
    },
    hapusLagu(index){
        this.lagu.splice(index,1)
    },
    tampilkanPlaylist(){
        console.log("============= MY PLAYLIST ==============")
        for (let i = 0; i < this.lagu.length; i++){
            console.log(i + 1 + ".", this.lagu[i])
        }
    }
}

playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");
playlist.hapusLagu(1)

playlist.tampilkanPlaylist();