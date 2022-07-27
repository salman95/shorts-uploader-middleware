const { exec, spawn, spawnSync } = require('child_process');

var conversion = function(fileName) {
    exec(`ffmpeg -i ./file-upload/${fileName} ./exported-files/${fileName}.avi`, (error, stdout, stderr) => {
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
