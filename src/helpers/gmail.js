const nodemailer = require('nodemailer');

module.exports = {

    sendgmail(name, email, subject) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'paulurbina94@gmail.com',
                pass: 'calisTONY94'
            }
        });

        let mailOptions = {
            from: 'System Urb',
            to: email,
            subject: `Proyectos de desarrollo web, Fotografia y Video`,
            text: `Hola ${name} nos estaremos comunicando contigo en unos minutos!`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if(error) {
                console.log(error)
            }
        });
    }

};