const  nodemailer = require("nodemailer")
const  express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config() 
const   app = express()
const PORT = process.env.PORT
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.post("/send/email",(req,res)=>{
return res.send("555")
})



app.listen(PORT,()=>{
	console.log(`listening to ${PORT}`)
})
