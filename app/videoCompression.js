const ffmpeg = require('fluent-ffmpeg');
const ffprobe = require('ffprobe');

var videoCompression = function(fileName) {
    let width = 0;
    let height = 0;
    let resolution = '';

    new ffmpeg(`./file-upload/${fileName}`)
        .videoCodec('libx265')
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
            console.log('compression finished');
        }).on('error', function(err) {
            console.log('an error happened: ' + err.message);
            console.log(err);
        }).run();
}

module.exports = videoCompression;