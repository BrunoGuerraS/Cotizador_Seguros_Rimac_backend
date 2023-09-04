const express = require('express')
const routerApi = require('./routes')
const app = express()

const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

routerApi(app)

app.use(express.json());

app.listen(port, () => {
  console.log(`hey corri en el puerto ${port}`)
})

