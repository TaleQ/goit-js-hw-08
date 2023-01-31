import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = (event) => {
  localStorage.setItem("videoplayer-current-time", event.seconds);
};
player.on('timeupdate', throttle(saveCurrentTime, 1000));

const currentTime = localStorage.getItem('feedback-form-state');
if (currentTime) {
  player.setCurrentTime(currentTime);
};
