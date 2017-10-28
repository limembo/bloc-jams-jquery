$(document).ready(function(){
  album.songs.forEach ((song, index) => {
      song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
      `);
      song.element.click(event => {
        player.playPause(song);
<<<<<<< HEAD
=======
        $('button#play-pause').attr('playState')
>>>>>>> module-2-checkpoint-13
      });

      $('#song-list').append(song.element);
  });
});
