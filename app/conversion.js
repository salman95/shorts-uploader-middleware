const { exec, spawn, spawnSync } = require('child_process');

var conversion = function(fileName) {
    exec(`ffmpeg -i ./file-upload/${fileName} ./exported-files/${fileName}%d.avi`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        exec(`rm -rf ./file-upload/${fileName}`);
        if(stdout) {
            exec(`rm -rf ./file-upload/${fileName}`);
            console.log('Original File deleted');
        }
    });
  

}
module.exports = conversion;
