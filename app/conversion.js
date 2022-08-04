const { exec, spawn, spawnSync } = require('child_process');

var conversion = function(fileName) {
    new exec(`ffmpeg -i ./file-upload/${fileName} -vf 'crop=605:1440' -c:v libx265 -s 2560x1440 -crf 22 -preset fast ./exported-files/${fileName}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        else if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
  

}
module.exports = conversion;
