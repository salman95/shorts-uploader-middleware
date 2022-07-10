const express = require('express');
const upload = require('express-fileupload');
const { exec } = require('child_process');
const convert = require('./app/conversion');
const app = express();

let fileNameLol;
app.use(upload());

app.post('/api/files', (req, res) => {
    res.send("Response Successful");
    console.log("File was recieved");
    if(req.files == undefined) {
        console.log("File is showing as undefined");
    } else {
        console.log("File is showing correctly");
        this.filenameLol = req.files.file.name.replace(/\s+/g, '');//removes whitespaces first
        
        console.log('The file name is ' + this.filenameLol);
        req.files.file.mv(`./file-upload/${this.filenameLol}`, (err) => {
        });
    }

})
app.get('/api/testGet',(req,res) => {
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.send(stdout);
    });
})
app.get('/api/convert-video', (req, res) => {
    convert(this.filenameLol);
    //console.log("Conversion is done. Async worked.")
    
})

app.listen(5000)
console.log("Server started at port 5000");