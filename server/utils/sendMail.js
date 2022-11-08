import nodemailer from 'nodemailer'


const sendMail = async (email, subject, text) => {

  try {
    const transporter = await nodemailer.createTransport({
      service: process.env.SERVICE,
      host: process.env.HOST,
      port: process.env.SMPT_PORT,
      secure: process.env.SECURE,

      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text
    })
  } catch (error) {
    console.log(error)
  }

}

export default sendMail
