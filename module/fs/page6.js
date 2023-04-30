const fs = require('fs')


function synchrousReadFile() {
  // reading the file
  console.log(`file reading started`)

  try {
    // blocking call/API
    const data = fs.readFileSync('./file2.txt')
    console.log('file reading finished')
    console.log(`data = ${data}`)
    console.log('bye bye')
  } catch(ex) {
    console.log(`exception: ${ex}`)
  }

  // mathematical calculation
  console.log('peforming multiplication')
  const result = 23412424524524 * 3453245245232543
  console.log(`result = ${result}`)

  // mathematical calculation
  console.log('peforming division')
  const result2 = 23412424524524 / 3453245245232543
  console.log(`result2 = ${result2}`)
}

// synchrousReadFile()


function asynchrousReadFile() {
  console.log('reading file started')

  // starts a thread to perform the read operation
  fs.readFile('./file1.txt', (error, data) => {
    // the reading is finished

    console.log('file reading finished')

    if (error) {
      console.log(`error: ${error}`)
    } else {
      console.log(`data = ${data}`)
    }
    console.log('bye bye')
  })

  // perform mathematical operation
  console.log('performing mulitplication')
  const result =  244534433534 * 23424243242243
  console.log(`answer = ${result}`)

  // mathematical calculation
  console.log('peforming division')
  const result2 = 23412424524524 / 3453245245232543
  console.log(`result2 = ${result2}`)
}

asynchrousReadFile()


function funtion1() {
  console.log('download started')
  setTimeout(() => {
    console.log('download finished')
  }, 5000)

  // perform mathematical operation
  console.log('performing mulitplication')
  const result =  244534433534 * 23424243242243
  console.log(`answer = ${result}`) 
  
  console.log('performing another task')
  setTimeout(() => {
    console.log('another task finished')
  }, 10000)
}

// funtion1()


function myReadFile(path, func) {
  // func =  (error, data) => { .. }
  const data = fs.readFileSync(path)
  setTimeout(() => {
    func(null, data)
  }, 10000)
}

function function2() {
  console.log('reading started')
  myReadFile('./file1.txt', (error, data) => {
    console.log(`data = ${data}`)
    console.log('reading finished')
  })

  // perform mathematical operation
  console.log('performing mulitplication')
  const result =  244534433534 * 23424243242243
  console.log(`answer = ${result}`)
}

// function2()