const ytdl = require('ytdl-core');
const maxApi = require('max-api');

maxApi.addHandler('open', (url) => {
    ytdl.getInfo(url)
        .then(info => {
            console.log(info);
            let video = ytdl.chooseFormat(info.formats, { quality: '136' });
            let audio = ytdl.chooseFormat(info.formats, { quality: '18' });
            maxApi.outlet('video_url', video.url);
            maxApi.outlet('audio_url', audio.url);

        });


});