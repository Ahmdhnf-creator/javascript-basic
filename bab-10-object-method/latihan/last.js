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
        console.log("Nama Playlist  :",this.namaPlaylist)
        console.log("Lagu           :",this.lagu)
    }
}

playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");
playlist.hapusLagu(1)

playlist.tampilkanPlaylist();