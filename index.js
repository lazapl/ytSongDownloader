const fs = require('fs');
const ytdl = require('ytdl-core');

async function downloadVideo() {
  try {
    const url = 'https://www.youtube.com/watch?v=nfJReXaXkTY';
    const info = await ytdl.getInfo(url);

  
    let format = ytdl.chooseFormat(info.formats, { quality: 'lowestaudio' });
    console.log('Format found!', format);

    
    ytdl(url, { format: format })
      .pipe(fs.createWriteStream('outputL.mp4'));


    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    console.log('Formats with only audio: ' + audioFormats.length);
  } catch (error) {
    console.error('Error:', error.message);
  }
}


downloadVideo();