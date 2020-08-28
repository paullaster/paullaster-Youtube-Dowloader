const express = require('express');
const cors = require('cors');
const fs = require('fs');
const ytdl = require('ytdl-core');
//const { getVideoID } = require('ytdl-core');
const app = express();
app.set('appName' ,'PaullasterYoubeDownloader');
app.set('port', process.env.PORT || 2121);
app.use(cors());
app.use(express.static('../public'));
app.listen(app.get('port'),() => {
    console.log('Server Works !!! At port ' + app.get('port'));
});
app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/download', (req,res) => {
var URL = req.query.URL;
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4',
    filter: 'audioandvideo',
    quality: '137  mp4  1080p   avc1.640028     4.53MB'
    }).pipe(res);
});