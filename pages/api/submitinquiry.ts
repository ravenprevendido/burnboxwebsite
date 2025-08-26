import nodemailer from 'nodemailer';

export default async function handler(req: { body: { email: any; name: any; message: any; product: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; }; }) {
  const { email, name, message, product } = req.body;

  if (!email || !name || !product) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // You receive it
    subject: `New Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nProduct: ${product}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Inquiry submitted!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
}
