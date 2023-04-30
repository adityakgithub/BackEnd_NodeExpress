// step 1: get the http module
const http = require('http')

// step 2: create a http server
const server = http.createServer((request, response) => {
  console.log('a request received')

  // send the response
  response.end("<h1>hello from server...</h1>")
})

// step 3: start the server
server.listen(3000, '0.0.0.0', () => {
  console.log('server started successfully')
})