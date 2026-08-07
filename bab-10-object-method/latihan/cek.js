let playlist = {
  namaPlaylist: "Musik Favorit",
  lagu: [],

  tambahLagu: function(judul) {
    this.lagu.push(judul);
  },

  hapusLagu: function(index) {
    this.lagu.splice(index, 1);
  },

  tampilkanPlaylist: function() {
    console.log("=== PLAYLIST: " + this.namaPlaylist + " ===");
    for (let i = 0; i < this.lagu.length; i++) {
      console.log((i + 1) + ". " + this.lagu[i]);
    }
  }
};


playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");


playlist.tambahLagu("Alan Walker - Faded");
playlist.tambahLagu("Alan Walker - Alone");
playlist.tambahLagu("Alan Walker - On My Way");
playlist.tambahLagu("Alan Walker - Darkside");

playlist.tampilkanPlaylist();