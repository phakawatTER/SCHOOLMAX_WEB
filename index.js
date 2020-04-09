const nodemailer = require("nodemailer")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


const transporter = nodemailer.createTransport({
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



app.listen(PORT, () => {
	console.log(`listening to ${PORT}`)
})
