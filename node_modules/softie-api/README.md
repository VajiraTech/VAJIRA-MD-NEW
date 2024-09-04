# softie-api

A module with api collection. Written with only Javascript and a node-friendly streaming interface.

## Support
You can contact me for support on [WhasApp](https://wa.me/94766866297)

## Install

```bash
npm install softie-api@latest
```

Or for Yarn users:
```bash
yarn add softie-api@latest
```

Make sure you're installing the latest version of softie-api to keep up with the latest fixes.
## Functions
| Function  | Description |
| ------------- | ------------- |
| instagramDown  | Download media from instagram  |
| facebookDown  | Download videos from facebook  |
| tiktokDown  | Download videos from tiktok  |
| youtubeDown  | Download videos and audio from youtube  |
| youtubeSearch  | Search videos on youtube  |
## Usage
```js
const api = require('softie-api');
const url = 'https://www.instagram.com/reel/C5_Gu_uIF9Y';

api.instagramDown(url) //check functions table for other functions
    .then(data => {
        //handle data
       console.log(data);
    })
    .catch(error => {
        // Handle error
        console.log(error);
    });
```

## Sample Output

#### instagramDown:
```output
{
  type: 'video',
  url: 'https://ig211.snap-data.xyz/ig/1713866907/a226853652fa3fd1041467fa545678a31b951a7ee1561e62c50f5abf2d51cbee?file=aHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3YvdDY2LjMwMTAwLTE2LzEwMDAwMDAwXzE2MjgwNDkxNDQ1OTk1MTRfMzMyNDI2MDkwNTU3MjU3MDE3MV9uLm1wND9fbmNfaHQ9c2NvbnRlbnQtc2luNi0zLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDYmX25jX29oYz1lVHEzZDA2QnR5NEFiNUVSRUFuJmVkbT1BUF9WMTBFQkFBQUEmY2NiPTctNSZvaD0wMF9BZkJuNmVTYm5PUHpMZVZmdnlMUzhtR3A0SE1fckh6bTBKSWh6akJ6LTJyaTJBJm9lPTY2Mjk2MEM1Jl9uY19zaWQ9Mjk5OWI4Jm5hbWU9U2F2ZUlHLkFwcF8zMzUwNDI2MjY1NTgxNTQzMjU2Lm1wNA'
}
```
#### facebookDown:
```output
{
  title: 'No video title',
  description: 'Description: No video description... \nDuration: 06 minutes, 40 seconds',
  sdLink: 'https://video-ord5-2.xx.fbcdn.net/v/t42.1790-2/10000000_454691673085185_5703985504496253926_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjM2MCwicmxhIjoxNTAyLCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjo0MzMzODcyMjUyNzgxNzV9&_nc_ohc=fOf-YQJ-dQsAb6x-g_d&rl=360&vabr=200&_nc_ht=video-ord5-2.xx&oh=00_AfBLxz8MFXUDOCiiDDigdESxKEvMsOvJqodikXmFUFM0Yg&oe=662D430A&dl=1',
  hdLink: 'https://video-ord5-2.xx.fbcdn.net/o1/v/t2/f1/m69/GOw8_RlYmWBc1ssCACPYvtPUOSVMbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ord5-2.xx.fbcdn.net&_nc_cat=106&strext=1&vs=5a95cf7b80c47e0a&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT3c4X1JsWW1XQmMxc3NDQUNQWXZ0UFVPU1ZNYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNWjJFaEhpYUxyX3otNEJBSFA1M3NzT2lSRi1idjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJvrKtNW784wMFQIoAkMzGAt2dHNfcHJldmlldxwXQHkMKPXCj1wYIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BTk5MjIzEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDMzMzg3MjI1Mjc4MTc1Em9lbV92aWRlb19hc3NldF9pZA80NTY5MTQ0MDYxOTcyMDkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDM0MDYwNzE2OTI5NTYzNDkcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA80NzYzNjI1NDUwNjQwNTgOdnRzX3JlcXVlc3RfaWQAJQIcACXEARsHiAFzBDI5NTMCY2QKMjAyMi0wNi0wNwNyY2IFOTkyMDADYXBwFEZhY2Vib29rIGZvciBBbmRyb2lkAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwY0MDAuNzICdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=9-4&oh=00_AfCCr0bLMdw-hVXqO6aBxFuDYbHWsaY8PimeBtOF2w-nJA&oe=66293CA5&_nc_sid=1d576d&_nc_rid=308335548834445&_nc_store_type=1&dl=1'
}
```

#### tiktokDown:
```output
{
  author: '𝗣𝗿𝗶𝗻𝗰𝗲𝘀𝘀 𝗲𝗹𝘀𝗮💗🖇️',
  title: '🤭🤭 #princess_elsa #princess_elsa01 #trending #viral #2million #dn💙🧸✨ #elsa🙈🍄 #funny @SĦɆNƗ ɃȺɃȺ★🤍࿓🕊️',
  avatar: 'https://tikcdn.io/tiktokdownload/a/aHR0cHM6Ly9wMTYtc2lnbi1zZy50aWt0b2tjZG4uY29tL2F3ZW1lLzEwMHgxMDAvdG9zLWFsaXNnLWF2dC0wMDY4L2I4ZWViYzlmYjk4ODJhM2UzODRmMjM4ODYzMTQxYTQ4LndlYnA/bGszcz00NTEyNjIxNyZub25jZT05NTI2MSZyZWZyZXNoX3Rva2VuPWRmNTU0OTJiMmFlMmI4MDQwYTZiYWZhZmJhNDk0YzE2JngtZXhwaXJlcz0xNzEzOTQ1NjAwJngtc2lnbmF0dXJlPW9kVlVFWU9VdlVYWkZ6TDFvRk9CcmRXeG95ayUzRA==',
  video: 'https://tikcdn.io/tiktokdownload/7353492524763286791',
  audio: 'https://tikcdn.io/tiktokdownload/aHR0cHM6Ly9zZjE2LWllcy1tdXNpYy1zZy50aWt0b2tjZG4uY29tL29iai90aWt0b2stb2JqLzczMTgzOTU1MjgzODY5Mzk2NTAubXAz'
}
```
```output
{
  type: 'video',
  url: 'https://ig211.snap-data.xyz/ig/1713866907/a226853652fa3fd1041467fa545678a31b951a7ee1561e62c50f5abf2d51cbee?file=aHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3YvdDY2LjMwMTAwLTE2LzEwMDAwMDAwXzE2MjgwNDkxNDQ1OTk1MTRfMzMyNDI2MDkwNTU3MjU3MDE3MV9uLm1wND9fbmNfaHQ9c2NvbnRlbnQtc2luNi0zLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDYmX25jX29oYz1lVHEzZDA2QnR5NEFiNUVSRUFuJmVkbT1BUF9WMTBFQkFBQUEmY2NiPTctNSZvaD0wMF9BZkJuNmVTYm5PUHpMZVZmdnlMUzhtR3A0SE1fckh6bTBKSWh6akJ6LTJyaTJBJm9lPTY2Mjk2MEM1Jl9uY19zaWQ9Mjk5OWI4Jm5hbWU9U2F2ZUlHLkFwcF8zMzUwNDI2MjY1NTgxNTQzMjU2Lm1wNA'
}
```
#### youtubeDown:
```output
{
  title: 'SRIKANTH: PAPA KEHTE HAIN (Song) | RAJKUMMAR RAO | UDIT NARAYAN, ANAND-MILIND, ADITYA D | BHUSHAN K',
  duration: '02:54 minutes',
  thumbnail: 'https://i.ytimg.com/vi/uN7vjc7deuA/hqdefault.jpg?v=662673e5',
  videos: {
    p360: 'https://rr2---sn-q0c7rn7d.googlevideo.com/videoplayback?expire=1713946666&ei=ymsoZq-fMIrIp-oPg6Kl-AE&ip=52.31.42.66&id=o-AB2KgHzOnPuOQ7J0B0IsMEiIfDhtjACDIrtG6gG7JL8R&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=u4&mm=31%2C29&mn=sn-q0c7rn7d%2Csn-q0cedn7s&ms=au%2Crdu&mv=m&mvi=2&pl=23&initcwndbps=768750&bui=AWRWj2Qtg2wYUPh5TGqEpgUKskdrYGfE4NsfeGOYhCeluW6APPjATWsIeUYhCdIv32LwErkN9HVmegb-&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=174.381&lmt=1713825916551414&mt=1713924291&fvip=4&lmw=1&c=ANDROID_TV&txp=4432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAKK9abmwHaM4QrpS9FdWQjHnRqz0_aNWuZAP8O0B_1d0AiEAwxVSwiMCI6l8Z06lIgpvg_KJHtt9ecG3vvntruMcNCA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHWaYeowRQIgeBY0MwRjVF8dEDtUWD0Sml4YLEMYeAXL5H-bQVJsiXgCIQC6MoDa4mjsE5w7RPJupYDUAXQKQQ489wtpAS9hgG1aGg%3D%3D&title=y2mate.is%20-%20SRIKANTH%3A+PAPA+KEHTE+HAIN+%28Song%29+%7C+RAJKUMMAR+RAO+%7C+UDIT+NARAYAN%2C+ANAND-MILIND%2C+ADITYA+D+%7C+BHUSHAN+K-uN7vjc7deuA-720p-1713925066',
    p720: 'https://rr2---sn-q0c7rn7d.googlevideo.com/videoplayback?expire=1713946666&ei=ymsoZq-fMIrIp-oPg6Kl-AE&ip=52.31.42.66&id=o-AB2KgHzOnPuOQ7J0B0IsMEiIfDhtjACDIrtG6gG7JL8R&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=u4&mm=31%2C29&mn=sn-q0c7rn7d%2Csn-q0cedn7s&ms=au%2Crdu&mv=m&mvi=2&pl=23&initcwndbps=768750&bui=AWRWj2Qtg2wYUPh5TGqEpgUKskdrYGfE4NsfeGOYhCeluW6APPjATWsIeUYhCdIv32LwErkN9HVmegb-&vprv=1&mime=video%2Fmp4&gir=yes&clen=11214023&ratebypass=yes&dur=174.381&lmt=1713825543617577&mt=1713924291&fvip=4&lmw=1&c=ANDROID_TV&txp=4438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAPMMTJY9kTXy0p5W8rAfJ9wyT4eMQq5nOvFzO-l_xxTJAiA7NpzfIAxlGznsXJULifC8Thcr7A_Ri4ROdJIZI7-Ixw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHWaYeowRQIgeBY0MwRjVF8dEDtUWD0Sml4YLEMYeAXL5H-bQVJsiXgCIQC6MoDa4mjsE5w7RPJupYDUAXQKQQ489wtpAS9hgG1aGg%3D%3D&title=y2mate.is%20-%20SRIKANTH%3A+PAPA+KEHTE+HAIN+%28Song%29+%7C+RAJKUMMAR+RAO+%7C+UDIT+NARAYAN%2C+ANAND-MILIND%2C+ADITYA+D+%7C+BHUSHAN+K-uN7vjc7deuA-360p-1713925066'
  },
  audio: 'https://rr2---sn-q0c7rn7d.googlevideo.com/videoplayback?expire=1713946666&ei=ymsoZq-fMIrIp-oPg6Kl-AE&ip=52.31.42.66&id=o-AB2KgHzOnPuOQ7J0B0IsMEiIfDhtjACDIrtG6gG7JL8R&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=u4&mm=31%2C29&mn=sn-q0c7rn7d%2Csn-q0cedn7s&ms=au%2Crdu&mv=m&mvi=2&pl=23&initcwndbps=768750&bui=AWRWj2QZi34HMQHd21padicHVRB4oaYnxL-kiq7YufqhxsKDPiNfOsI1O5WkcMHxDeIqUBGdC4C3Jvuw&vprv=1&mime=audio%2Fmp4&gir=yes&clen=2823287&dur=174.381&lmt=1713824991880387&mt=1713924291&fvip=4&keepalive=yes&lmw=1&c=ANDROID_TV&txp=4432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgS_oSiWwV30zY0TtaEcd4YP0-l2euguWD60j5wY873aMCIB76mYZ_ErHPHMLfZ3-p2V7_as39UwBrRalsLyShxufG&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHWaYeowRQIgeBY0MwRjVF8dEDtUWD0Sml4YLEMYeAXL5H-bQVJsiXgCIQC6MoDa4mjsE5w7RPJupYDUAXQKQQ489wtpAS9hgG1aGg%3D%3D&title=SRIKANTH%3A+PAPA+KEHTE+HAIN+%28Song%29+%7C+RAJKUMMAR+RAO+%7C+UDIT+NARAYAN%2C+ANAND-MILIND%2C+ADITYA+D+%7C+BHUSHAN+K'
}
```
#### youtubeSearch:
```output
[
  {
    title: 'Lelena (ලෙලෙනා) - Nilan Hettiarachchi Official Music Video',
    url: 'https://www.youtube.com/watch?v=0geqOYqwL0s&pp=ygUGbGVsZW5h',
    author: 'SGM Tunes',
    thumbnail: 'https://i.ytimg.com/vi/0geqOYqwL0s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfFvTlEIJe5q0kS0fUip9ArX_vFQ',
    views: '35M views',
    upload: '2 years ago'
  },
  {
    title: 'Nilan Hettiarachchi - ලෙලෙනා | Lelena (Lyrics)',
    url: 'https://www.youtube.com/watch?v=AFqtArWpv-w&pp=ygUGbGVsZW5h',
    author: 'SL Lyrics',
    thumbnail: 'https://i.ytimg.com/vi/AFqtArWpv-w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACGfIZru1QAFwps7NbN6zlwDhFAw',
    views: '494K views',
    upload: '2 years ago'
  },
  {
    title: 'Nasuna - Smokio Ft. Dinesh Gamage | Chamath Sangeeth - Official Music Video',
    url: 'https://www.youtube.com/watch?v=dOpW7ewpJwI&pp=ygUGbGVsZW5h',
    author: 'C Music',
    thumbnail: 'https://i.ytimg.com/vi/dOpW7ewpJwI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0t4OI1QX6pIOOnup1XcSE3aRLEw',
    views: '38M views',
    upload: '2 years ago'
  },
  {
    title: 'ලෙලෙනා - Lelena | Nilan Hettiarachchi song | Chipmunks & Himabole version song with lyrics',
    url: 'https://www.youtube.com/watch?v=qcKQCymbXWE&pp=ygUGbGVsZW5h',
    author: 'Chama Academy',
    thumbnail: 'https://i.ytimg.com/vi/qcKQCymbXWE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHmTcjMjS8XLsDYsVlPLHi7fIOtQ',
    views: '1.5M views',
    upload: '2 years ago'
  },
  {
    title: 'Nasuna vs lelena dj kawadi baila dance mix | new bus video collection | new song kawadi baila remix',
    url: 'https://www.youtube.com/watch?v=7vzec3qK7m4&pp=ygUGbGVsZW5h',
    author: 'BUS MART LK',
    thumbnail: 'https://i.ytimg.com/vi/7vzec3qK7m4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQR54mhtOEzhvC4YoKURbuaj6osA',
    views: '3.2M views',
    upload: '2 years ago'
  },
  {
    title: 'Hade Upan Lande (හදේ උපන් ළඳේ)| Dinusha X sky jay | official music video | lyrics 🥰',
    url: 'https://www.youtube.com/watch?v=9cDVs54eJqo&pp=ygUGbGVsZW5h',
    author: 'SL Crypto Family',
    thumbnail: 'https://i.ytimg.com/vi/9cDVs54eJqo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBocRmDYpB7DILBEwiWUDKZZJP0Bw',
    views: '2.9M views',
    upload: '1 year ago'
  },
  {
    title: 'PAAGAL BETA 79 | Desi Comedy Video | CS Bisht Vines | Jokes',
    url: 'https://www.youtube.com/watch?v=F7vwwMBSlDs&pp=ygUGbGVsZW5h',
    author: 'CS Bisht Vines',
    thumbnail: 'https://i.ytimg.com/vi/F7vwwMBSlDs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMpN9B5L3Ph-zDimkenwO0RipO7A',
    views: '1.2M views',
    upload: '6 days ago'
  },
  {
    title: 'දොන් ජිං ජිං දොන් තරිකිට - Don jin jin don tharikita lyrics | Himabole Studio | Alvin new video',
    url: 'https://www.youtube.com/watch?v=HoVwk6rwR9A&pp=ygUGbGVsZW5h',
    author: 'Himabole Studio',
    thumbnail: 'https://i.ytimg.com/vi/HoVwk6rwR9A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOpfNS00tYBVnNNo6vQeS5Ph6f7Q',
    views: '3.6M views',
    upload: '1 year ago'
  },
  {
    title: 'Lokayen Yamu (ලෝකයෙන් යමු) | SONIC & FREE FIRE MIX',
    url: 'https://www.youtube.com/watch?v=jKgJYcJ-ADU&pp=ygUGbGVsZW5h',
    author: 'SL Music With Sayum And Navidu',
    thumbnail: 'https://i.ytimg.com/vi/jKgJYcJ-ADU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq6Nu_lC3u_BGzifSurULJoJeIAg',
    views: '181K views',
    upload: '1 year ago'
  },
  {
    title: 'Lelena(ලෙලෙනා) Dj Remix [6-8 Beat] - Nilan Hettiarachchi',
    url: 'https://www.youtube.com/watch?v=qwSmrzQmfgA&pp=ygUGbGVsZW5h',
    author: 'Yaka Vibes',
    thumbnail: 'https://i.ytimg.com/vi/qwSmrzQmfgA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7xMxDWxyuOyWpKGXS1_TF1wBsAw',
    views: '2.8M views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena  Dj Remix (ලෙලෙනා ඩීජේ රිමික්ස් ) - Nilan Hettiarachchi Dj Dumidu Lelena Dj Lelena Remix',
    url: 'https://www.youtube.com/watch?v=grzshdSMOlM&pp=ygUGbGVsZW5h',
    author: 'Ramchand Records',
    thumbnail: 'https://i.ytimg.com/vi/grzshdSMOlM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhtEjj4LMa4LI-ZPM5MPdCrO4Ceg',
    views: '969K views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena - Nilan Hettiarachchi Karoke Without Voice',
    url: 'https://www.youtube.com/watch?v=4luwVWDLpX0&pp=ygUGbGVsZW5h',
    author: 'PRAMUKA KAROKE MUSIC',
    thumbnail: 'https://i.ytimg.com/vi/4luwVWDLpX0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5mgcGpJiHSTZJWL4iBCdeCzF1cg',
    views: '576K views',
    upload: '2 years ago'
  },
  {
    title: 'Age Sugani Dj Remix Song Jhan Jhan Hard Bass Dholki Mix ) New Maghi Sad 💔 Song 2024 Dj Nikku Deewana',
    url: 'https://www.youtube.com/watch?v=qXWxzaluNS4&pp=ygUGbGVsZW5h',
    author: '𝘿𝙟 𝙉𝙞𝙠𝙠𝙪 𝘿𝙞𝙬𝙖𝙣𝙖',
    thumbnail: 'https://i.ytimg.com/vi/qXWxzaluNS4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaeQAZqdzyig8LlviSyLVemx_36g',
    views: '193 views',
    upload: '2 days ago'
  },
  {
    title: 'Lelena (ලෙලෙනා) - Nilan Hettiarachchi new sinhala song 2021 ( KOREAN MIX ) FULL HD The heirs',
    url: 'https://www.youtube.com/watch?v=KhI-EDojMSo&pp=ygUGbGVsZW5h',
    author: 'Yt World Music ♪',
    thumbnail: 'https://i.ytimg.com/vi/KhI-EDojMSo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHNIws8srMlmERnd4bytG5-P-JSQ',
    views: '7.3K views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena ( ලෙලෙනා) Dance Cover | Sonali ft. Piumi',
    url: 'https://www.youtube.com/watch?v=FLquan5T2ro&pp=ygUGbGVsZW5h',
    author: 'Sonali Thamarasa',
    thumbnail: 'https://i.ytimg.com/vi/FLquan5T2ro/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPk6y2hg4htKgkRUlDC3X_u8Cl8w',
    views: '741K views',
    upload: '2 years ago'
  },
  {
    title: '#Lelena #DanceCover #DeDazzles Lelena Song | Dance Cover | De Dazzles | Sri Lanka',
    url: 'https://www.youtube.com/watch?v=xKFUym3OeeU&pp=ygUGbGVsZW5h',
    author: 'De Dazzles',
    thumbnail: 'https://i.ytimg.com/vi/xKFUym3OeeU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnW59MFrkvoWKQk4GxQ6fGLlxcJA',
    views: '459K views',
    upload: '2 years ago'
  },
  {
    title: 'Nasuna  | lelena | Manike dj dance mix | new bus dj nonstop ewmix | 2021 hitz dj nonstop|2021 new dj',
    url: 'https://www.youtube.com/watch?v=LSxabirl4m0&pp=ygUGbGVsZW5h',
    author: 'Bus lk official',
    thumbnail: 'https://i.ytimg.com/vi/LSxabirl4m0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCraynbsx2Dd4uOCqIKrizFKiwG-w',
    views: '1.1M views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena (ලෙලෙනා ) | Nilan Hettiarachchi |thanu music cover',
    url: 'https://www.youtube.com/watch?v=Dty604poHAU&pp=ygUGbGVsZW5h',
    author: 'THANU MUSIC',
    thumbnail: 'https://i.ytimg.com/vi/Dty604poHAU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1N5Cs8XCJgb5OO-ejd_Z5RhDf1A',
    views: '539K views',
    upload: '2 years ago'
  },
  {
    title: 'lelena,rahasak || chipmunks 🐿 version || 2021 new dj remix song || new chipmunks cover 2021|| bus dj',
    url: 'https://www.youtube.com/watch?v=YHIuxh06L9Y&pp=ygUGbGVsZW5h',
    author: 'sl bus college',
    thumbnail: 'https://i.ytimg.com/vi/YHIuxh06L9Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoGWNC-G739_dAoDuGMu55LBXgvA',
    views: '1M views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena bus dj remix | lelena song nilan hettiarachchi | lelena dj song | bus dj 2021 song',
    url: 'https://www.youtube.com/watch?v=e81CrMittHY&pp=ygUGbGVsZW5h',
    author: 'Bus lk official',
    thumbnail: 'https://i.ytimg.com/vi/e81CrMittHY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSB5V0tGa9GoAMN2C-GBhKUIInxA',
    views: '289K views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena (ලෙලෙනා) -Official Remix | Nilan Hettiarachchi | Dexer and Zack N',
    url: 'https://www.youtube.com/watch?v=F_GGULnBrqs&pp=ygUGbGVsZW5h',
    author: 'SGM Records',
    thumbnail: 'https://i.ytimg.com/vi/F_GGULnBrqs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArLacs5_xd2oyIR-ZXzUlCLo90Xw',
    views: '54K views',
    upload: '2 years ago'
  },
  {
    title: 'Lelena (ලෙලෙනා) Free Fire Animation Movie | Music Video |',
    url: 'https://www.youtube.com/watch?v=2MLcLaMGUUA&pp=ygUGbGVsZW5h',
    author: 'SL Music With Sayum And Navidu',
    thumbnail: 'https://i.ytimg.com/vi/2MLcLaMGUUA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgoB4P4_g987iq44AYL13EEUSh6g',
    views: '48K views',
    upload: '1 year ago'
  },
  {
    title: 'Laga Lagatama (ලඟ ලඟටම) - Thiwanka Dilshan Ft. Shan Putha | Official Music Video',
    url: 'https://www.youtube.com/watch?v=b7dUGLCpH2A&pp=ygUGbGVsZW5h',
    author: 'SGM Tunes',
    thumbnail: 'https://i.ytimg.com/vi/b7dUGLCpH2A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmqUeQjPe4r9oDzfudIgUo7scRgg',
    views: '30M views',
    upload: '2 years ago'
  }
]
```

Thank you for using softie-api.
