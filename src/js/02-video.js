import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentData = localStorage.getItem('videoplayer-current-time');
console.log(`currentData: ${currentData}`);
const currentTime = currentData? currentData : 0;

player.setCurrentTime(currentTime);

const timePost = function(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
   console.log(`data.seconds ${data.seconds}`);

};

player.on('timeupdate', throttle(timePost,1000));
