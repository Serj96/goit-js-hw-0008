import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const   CURRENT_TIME = "videoplayer-current-time";

player.on("timeupdate", throttle(onPlay, 1000));

setCurrentTime();

function onPlay({second}) {
const   CURRENT_TIME = "videoplayer-current-time";
    localStorage.setItem(CURRENT_TIME, second);

}

function setCurrentTime() {
    if(localStorage.getItem(CURRENT_TIME)) {
        player.setCurrentItem(localStorage.getItem(CURRENT_TIME));
    }
}
