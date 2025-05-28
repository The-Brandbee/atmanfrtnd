import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message, location, phone } = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


        const emailContent = `
      Name: ${name}
      Email: ${email}
      Location: ${location}
      Phone: ${phone}

      Message:
      ${message}
    `;
    
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_SENT,
      subject: `Message from Atman AI website Lead form`,
      text: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

export async function GET(req) {
  return new Response('Method GET not allowed', { status: 405 });
}
