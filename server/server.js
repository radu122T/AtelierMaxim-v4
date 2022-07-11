const path=require("path")
const express =require("express")
const app = express()
const publicPath = path.join(__dirname, "..","client", 'dist')
const publicPath2 = path.join(__dirname, "..","client", 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))
app.use(express.static(publicPath2))
app.use(express.json())


app.get("*", (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.post('/api', (req,res) => {
    
    console.log(req.body)
    res.json({
        status:'success'
    })
})


app.listen(port, () => {
    console.log('server is up')
})
