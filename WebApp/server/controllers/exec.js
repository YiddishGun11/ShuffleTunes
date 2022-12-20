'use strict'

const getUser = require('./data.js');

const {exec} = require('child_process');

const playSong = async(request, response) => {
    let data = request.body;
    let song = data.song;
    const username = await getUser.whoIsConnected(request.signedCookies);

    exec(`/home/pi/Music/${username}/ mpg123 -w ${song}.wav ${song}`, (error, stdout, stderr) => {
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

    exec(`/home/pi/play /home/pi/Music/${username}/${song}.wav 107.9`, (error, stdout, stderr) => {
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

const stopSong = async() => {
    
    //exec(`start C:/Users/maxim/Desktop/Metallica-MasterOfPuppets(Lyrics).mp3`, (error, stdout, stderr) => {
    exec(`/home/pi/play /home/pi/Music/silence.wav 107.9`, (error, stdout, stderr) => {
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
    playSong,
    stopSong
}