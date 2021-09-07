// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const nm = require("nodemailer");
    require("dotenv").config();
    const transport = nm.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        secure: true,
    });
}
