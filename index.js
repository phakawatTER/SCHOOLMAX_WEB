const nodemailer = require("nodemailer")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT
const bodyParser = require("body-parser")
const path = require("path")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

console.log(process.env.NODE_ENV)

const transporter = nodemailer.createTransport({

host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
	service: 'hotmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD
	}
});


// HANDLE SENDING EMAIL
app.post("/send/email", (req, res) => {
	let { name, company, email, telephone, message } = req.body
	console.log(req.body)
	let html = `
	<h3>ข้อมูล</h3>
	<div><b>ชื่อ-สกุล:</b> ${name}</div>
	<div><b>บริษัท/โรงเรียน:</b> ${company}</div>
	<div><b>อีเมล:</b> ${email}</div>
	<div><b>โทรศัพท์:</b> ${telephone}</div>
	<div><b>ข้อความ:</b> ${message}</div>
	`
	let mailOptions = {
		from: process.env.EMAIL,                // sender
		to: process.env.TARGET_EMAIL,                // list of receivers
		subject: 'ติดต่อด่วน (SCHOOLMax)',              // Mail subject
		html  // HTML body
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed to send email")
			return res.json({ code: 500, err, message: "failed to send email..." })
		}
		console.log("success to send email")
		return res.json({ code: 200, message: "successfully sent email.." })

	});
})

if (process.env.NODE_ENV == "production"){
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    console.log("requset for static file")
    res.sendFile(path.join(__dirname,'/build/index.html'));
});
}


app.listen(PORT, () => {
	console.log(`listening to ${PORT}`)
})
