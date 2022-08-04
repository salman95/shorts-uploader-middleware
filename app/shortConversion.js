const ffmpeg = require('fluent-ffmpeg');
const ffprobe = require('ffprobe');

var shortConversion = function(fileName) {
    let width = 0;
    let height = 0;

    new ffmpeg.ffprobe(`./file-upload/${fileName}`, function(err, metadata) {
        width = metadata.streams[0].width;
        height = metadata.streams[0].height;
        console.log(`${width}x${height}`);
    });
    
    new ffmpeg(`./file-upload/${fileName}`)
        .videoFilter(`crop=605:${height}`)
        .videoCodec('libx265')
        .size(`${width}x${height}`) //new video resolution
        .addOutputOption('-crf', 22)
        .addOutputOption('-preset', 'fast')
        .format('mp4')
        .output(`./exported-files/${fileName}`)
        .on('start', function(command) {
            console.log('Spawned FFmpeg with command ' + command);
        })
        .on('progress', function(progress) {
            console.log('Processing ' + progress.percent + '% done');
        })
        .on('end', function() {
            console.log('conversion finished');
        }).on('error', function(err) {
            console.log('an error happened: ' + err.message);
            console.log(err);
        }).run();
}

module.exports = shortConversion;
