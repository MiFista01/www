
var express = require("express");
var app = express();

const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')


// ===================settings============================
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "4000mb"}));
app.use(bodyParser.urlencoded({limit: "4000mb", extended: true, parameterLimit:5000000}));
// ===================settings============================

app.get('/', async function(req, res){
    res.render('pages/index');
})

// ===========================send fragments==============================================
app.post('/fragment', async function(req, res){
    res.send(res.render("fragments/"+req.body.page+".ejs"));
})
// ===========================send fragments==============================================

app.post('/message', async function(req, res){
    let transporter  = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "mifis0site@gmail.com",
            pass: "uspazzyqatzvmpyu"
        } 
    });
    // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/handlebars/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/handlebars/'),
    };

    // use a template file with nodemailer
    transporter.use('compile', hbs(handlebarOptions))

    var mailOptions = {
        from: '"User" <'+req.body.user+'>', // sender address
        to: 'mifis0site@gmail.com', // list of receivers
        subject: 'Contact form',
        template: 'email', // the name of the template file i.e email.handlebars
        context:{
            user: req.body.name, // replace {{name}} with Adebola
            email: req.body.email,
            subject:req.body.subject,
            message: req.body.message // replace {{company}} with My Company
        }
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.send({status:0})
        }
        res.send({status:1})
    });
})
app.listen(3000);