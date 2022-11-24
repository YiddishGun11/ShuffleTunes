'use strict'

const {exec} = require('child_process');

const playSong = (request, response) => {
    let data = request.body;
    let song = data.song;

    exec("/home/pi/play /home/pi/Music/Gazo_BECTE.wav 107.9", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });


}

module.exports = {
    playSong
}