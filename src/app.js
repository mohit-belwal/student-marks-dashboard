const express = require('express')
require('./database/mongoose.js')
const studentRouter = require('./routers/route')

const app = express()

// To disable site for maintainance uncomment below function
// app.use((req, res, next)=>{
//     res.status(503).send('Site is under maintainance')
// })

app.use(express.json())     
app.use(studentRouter)

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'));
    const path= require("path");
    app.get("*",(req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(PORT, ()=>{
    console.log("Server is running on port "+ PORT)
})