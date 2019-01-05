const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
var nodemailer = require("nodemailer");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Serve up static assets
app.use(express.static("client/build"));

var transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		auth: {
				user: process.env.GMAIL_USERNAME,
				pass: process.env.GMAIL_PW
		}
});

//mailer routing
app.post('/sendemail', function(req, res){
	console.log("req!",req);
	var mailOptions={
	 from: req.body.from,
   to : req.body.to,
   subject : req.body.subject,
   text : req.body.text
}
	// console.log(mailOptions);
	transporter.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.end("error");
		} else {
		// console.log("Message sent: " + response.message);
		res.end("sent");
		}
	});
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
