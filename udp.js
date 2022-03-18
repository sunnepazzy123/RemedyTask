const dgram = require('dgram');
const socket = dgram.createSocket('udp4')

socket.on('message', (msg, rinfo)=>{
    console.log(`server get: ${msg} from ${rinfo.address}:${rinfo.port}`)
});

socket.bind(99)