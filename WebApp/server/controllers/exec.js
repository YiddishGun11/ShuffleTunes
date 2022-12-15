'use strict'

const getUser = require('./data.js');

const {exec} = require('child_process');

const playSong = async(request, response) => {
    let data = request.body;
    let song = data.song;
    const username = await getUser.whoIsConnected(request.signedCookies);
    
    exec(`/home/pi/play /home/pi/Music/${username}/${song}.wav`, (error, stdout, stderr) => {
    //exec(`start C:/Users/maxim/Desktop/Metallica-MasterOfPuppets(Lyrics).mp3`, (error, stdout, stderr) => {
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