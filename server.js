const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : undefined

app.use(
  cors({
    origin: allowedOrigins || true,
  })
)
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

Forwarding contact: nimyathomas29@gmail.com | +91 95263 72469
      `.trim(),
    })

    res.json({ success: true })
  } catch (error) {
    console.error('Error sending contact email', error)
    res.status(500).json({ error: 'Unable to send message right now.' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


