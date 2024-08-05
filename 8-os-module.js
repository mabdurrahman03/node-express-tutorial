const { log } = require('console');
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

//other method
const time = os.uptime();
console.log(time);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);