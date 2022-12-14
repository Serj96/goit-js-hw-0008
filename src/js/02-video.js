import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
    const player = new Player(iframeEl);

    const onPlay = function(data) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
        console.log(Math.round(Number(data.seconds)));
    };

    player.on("timeupdate", throttle(onPlay, 1000));

    const currentSeconds = localStorage.getItem("videoplayer-current-time");
    if(currentSeconds) {
        return player.setCurrentTime(JSON.parse(currentSeconds));
};
