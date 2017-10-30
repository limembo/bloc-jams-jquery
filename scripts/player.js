class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }

  prettyTime(timeInSeconds) {
<<<<<<< HEAD
       //store variable for whole seconds and whole minutes using math.floor to round down
       var minutes = Math.floor(timeInSeconds/60);
       var seconds = Math.floor(timeInSeconds%60);

       //return the time in X:XX format
       if (seconds < 10){
        return (minutes + ":0" + seconds);
      }
       else{
       return (minutes + ":" + seconds);
     }
  }
=======
        //store variable for whole seconds and whole minutes using math.floor to round down
        var minutes = Math.floor(timeInSeconds/60);
        var seconds = Math.floor(timeInSeconds%60);

        //return the time in X:XX format
        if (seconds < 10){
         return (minutes + ":0" + seconds);
       }
        else{
        return (minutes + ":" + seconds);
      }
   }
>>>>>>> module-2-checkpoint-13

  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');

      // Update our currentlyPlaying and playState properties
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }

  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }

  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();
