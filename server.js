const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
//app.use("~/", router);
app.listen(process.env.PORT || 5000, () =>
  console.log("Serveur en cours d'utilisation...")
);

var smtpConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // maisonqq (gmail)
  },
};
const contactEmail = nodemailer.createTransport(smtpConfig);

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Prêt à envoyer.");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.lastName + " " + req.body.firstName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  if (
    !(
      name === undefined ||
      (email === undefined && phone === undefined) ||
      message === undefined
    )
  ) {
    const mail = {
      from: name,
      to: "lambert.quentin96@gmail.com",
      subject: "Contact - Demande reçue",
      html: `<p>Nom - prénom: ${name}</p>
           <p>Email: ${email}</p>
           <p>No. téléphone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message envoyé" });
      }
    });
  } else {
    res.json({ code: 405, status: "Champs obligatoires" });
  }
});
