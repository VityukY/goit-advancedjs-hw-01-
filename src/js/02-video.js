import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentData = localStorage.getItem('videoplayer-current-time');
const currentTime = JSON.parse(currentData)? JSON.parse(currentData).seconds : 0;

player.setCurrentTime(currentTime);

const timePost = function(data) {
   console.log(data);
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data));

};

player.on('timeupdate', throttle(timePost,1000));
