const instagram = require('./lib/instagram');
const facebook = require('./lib/facebook');
const tiktok = require('./lib/tiktok');
const youtube = require('./lib/youtube');

module.exports = {
    instagramDown: instagram.instagramDown,
    facebookDown: facebook.facebookDown,
    tiktokDown: tiktok.tiktokDown,
    youtubeDown: youtube.youtubeDown,
    youtubeSearch: youtube.youtubeSearch,
};
