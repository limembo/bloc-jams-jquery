$(document).ready(function(){
  $('button#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

$('button#next').click(function() {
  if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').click(function() {
    if (player.playState !== 'playing') { return; }
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      if (previousSongIndex >= album.songs.length) { return; }

      const previousSong = album.songs[previousSongIndex];
      player.playPause(previousSong);
    });

    $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
    });

    $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
  });

    setInterval( () => {
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      const totalTime = (duration - currentTime);
      const newCurrentTime = player.prettyTime(currentTime);
      const newTotalTime = player.prettyTime(totalTime);
      $('#time-control .current-time').text(newCurrentTime);
      $('#time-control .total-time').text(newTotalTime);
      $('#time-control input').val(percent);
    }, 1000);
});
