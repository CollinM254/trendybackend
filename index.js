const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : "https://6644821b52099b86fbd0249e--resonant-lamington-035b8c.netlify.app",
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = process.env.PORT || 8080 


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
