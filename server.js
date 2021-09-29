const express = require('express')
const app = express()
const cors = require('cors')
const data = require('./data.json')

app.use(cors())
app.get('/etape', (req, res) => res.status(200).json(data))
app.listen(process.env.PORT || 8000, () => {
    console.log('listening on port 8000')
    })