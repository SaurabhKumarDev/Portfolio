const express = require("express");
const cors = require("cors");
const nodeMailer = require('nodemailer');
require('dotenv').config();

const app = express();
const router = require("express").Router();

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "https://saurabhkumardev.netlify.app"] }));

// NodeMailer setup
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
});

// Verify NodeMailer connection
transporter.verify((error, success) => {
    if (error) {
        console.error("Email verification service down:", error);
    } else {
        console.log("Email verification service ready!");
    }
});

// Email sending route
router.post("/email", async (req, res) => {

    const { name, email, phone, subject, message } = req.body;

    // Validate the request body
    const allowedFields = ["name", "phone", "email", "subject", "message"];
    for (const field in req.body) {
        if (!allowedFields.includes(field)) {
            console.log("Invalid field of data you are trying to pass in request body");
            return res.status(400).json({ error: "Invalid field of data you are trying to pass in request body", invalidField: field });
        }
    }

    // Send Email
    try {
        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: subject,
            html: `
            <p style="margin-bottom: 5px;">Hi <b>${name},</b></p>
            <p>${message}</p>
            <p>Thank you,</p>
            <p>${phone ? `Phone : ${phone}` : `<b>${name}</b>`}</p>
            `,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email", message: "An error occurred during the email sending process. Please contact support." });
    }
});

app.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
});

// Use the router
app.use("/", router);