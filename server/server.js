const path=require("path")
const express =require("express")
const mongoose = require("mongoose")
const postsRoute = require('./routes/posts')
const cors = require('cors')
require('dotenv/config')

const app = express()
const publicPath = path.join(__dirname, "..","client", 'dist')
const publicPath2 = path.join(__dirname, "..","client", 'public')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static(publicPath))
app.use(express.static(publicPath2))
app.use(express.json())
app.use('/api', postsRoute)

app.get("*", (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB!'))

app.listen(port, () => {
    console.log('server is up')
})
