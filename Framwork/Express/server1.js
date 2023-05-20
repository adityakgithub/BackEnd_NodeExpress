// step 1: require express
const express = require('express')

// step 2: create express application
const app = express()

// step 3: ROUTE (mapping of http GET, url and handler (function))
// GET /
app.get('/', (request, response) => {
  console.log('GET / received')
  response.end('from GET /')
})

app.get('/product', (request, response) => {
  console.log('select * from product')
  response.end('from GET /product')
})

app.post('/product', (request, response) => {
  console.log('insert into product')
  response.end('from POST /product')
})


app.put('/product', (request, response) => {
  console.log('update product')
  response.end('from PUT /product')
})

app.delete('/product', (request, response) => {
  console.log('delete product')
  response.end('from DELETE /product')
})

// step 4: listen on port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})