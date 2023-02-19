//storing OS info here.

const os = require('os');


const currentOS = {
    name: os.type(),
    totalMem: os.totalmem,
    freeMem: os.freemem
};

console.log(currentOS)