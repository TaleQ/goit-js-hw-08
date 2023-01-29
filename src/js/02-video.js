import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = (event) => {
  localStorage.setItem("videoplayer-current-time", event.seconds);
  // console.log(localStorage.getItem("videoplayer-current-time"));
};
player.on('timeupdate', throttle(saveCurrentTime, 1000));

player.on('play', function() {
  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
});