const express = require('express');
const upload = require('express-fileupload');
const convert = require('./app/conversion');
const shortConvert = require('./app/shortConversion');
const compressVideo = require('./app/videoCompression');
const cors = require('cors');
const app = express();

let fileNameLol;
app.use(upload());
app.use(cors());

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

app.get('/api/convert-video', (req, res) => {
    shortConvert(this.filenameLol);
})

app.get('/api/compress-video', (req, res) => {
    compressVideo(this.filenameLol);
    //convert(this.filenameLol);
});

app.get('/api/download-video', (req, res) => { 
    res.download(`./exported-files/${this.filenameLol}`, (err) => {
        if (err) {
            res.status(404)
            res.end();
            console.log(err);
        }
        else {
            console.log("File downloaded");
            res.end();
        }
    }
    );
})

app.listen(5000)
console.log("Server started at port 5000");