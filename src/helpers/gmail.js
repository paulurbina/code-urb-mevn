const nodemailer = require('nodemailer');

module.exports =  {
       
    sendMail: async function (name, email, subject) {

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            secure: false,
            port: 587,
            auth: {
                user: process.env.CORREO_GM,
                pass: process.env.PASSWORD_GM
            }
        });

        let mailOptions = {
            from: 'System Urb',
            to: email,
            subject: `Proyectos de desarrollo web, Fotografia y Video`,
            text: `Hola ${name} nos estaremos comunicando contigo en unos minutos!`
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if(error) {
                console.log(error);
            }
        });


    }

};