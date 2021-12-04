const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // 1st way without streaming
    // fs.readFile('input.txt', (err, data) => {
    //     if(err)
    //         return console.error(err);
    //     res.end(data.toString());
    // })
    
    const readStream = fs.createReadStream('input.txt');
    // 2nd way with stream
    // readStream.on("data", (chunkData) => {
    //     res.write(chunkData);
    // })
    // readStream.on("end", () => {
    //     res.end();
    // })
    // readStream.on('error', (err) => {
    //     console.log(err);
    //     res.end('File not found');
    // })
    // 3rd Way is stream pipe
    readStream.pipe(res);
})
  
server.listen(8000, '127.0.0.1');