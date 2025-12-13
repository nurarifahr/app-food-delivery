import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Start on http://localhost:${port}`)
})
// mongodb+srv://greatstack:12345567@cluster0.oici9ec.mongodb.net/?
// mongodb+srv://greatstack:12345567@cluster0.oici9ec.mongodb.net/?appName=Cluster0