const config = {
    host: process.env.FTP_HOST,
    port: 22,
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
};

//.then(
//     console.log('FTP connection established')
// ).catch(
//     console.log('A problem occured while connecting to the FTP server')
// );

module.exports = config