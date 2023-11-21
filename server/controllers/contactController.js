import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


export const sendEmail = async (req, res) => {
try {
  const { name, email, message } = req.body;

  // Konfiguriere den Nodemailer-Transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
    //   user: process.env.MAIL_USER,
    //   pass: process.env.MAIL_PASS
      user: 'goingfor@outlook.de',
      pass: 'SJMR-fbw-wd22-d09'
    }
  });

  // E-Mail-Optionen
  const mailOptions = {
    from: 'goingfor@outlook.de',
    to: 'goingfor@outlook.de',
    subject: 'Neue Kontaktanfrage',
    text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`,
  };

  // Sende die E-Mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
    } else {
      console.log('E-Mail erfolgreich versendet:', info.response);
      res.status(200).json({ success: 'E-Mail erfolgreich versendet' });
    }
  });
} catch (error) {
  console.error('Allgemeiner Fehler:', error);
  res.status(500).json({ error: 'Interner Serverfehler' });
}
}



