// importing a system (node) module
const os = require('os')

// cpu architcture
console.log(`architecture: ${os.arch()}`)

// os
console.log(`os: ${os.platform()}`)

// host name
console.log(`hostname: ${os.hostname()}`)

// home directory
console.log(`home directory: ${os.homedir()}`)

// total memory
console.log(`total memory: ${os.totalmem()}`)

// free memory
console.log(`free memory: ${os.freemem()}`)

// cpus
console.log(`CPUS`)
console.log(os.cpus())

// network interfaces
console.log(`Network interfaces`)
console.log(os.networkInterfaces())
