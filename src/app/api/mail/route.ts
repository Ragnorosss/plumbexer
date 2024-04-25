import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')));
  let sendCount = parseInt(cookies.sendCount || '0', 10);
  console.log(process.env.SMTP_EMAIL)
  try {
    if (sendCount >= 3) {
      return new NextResponse(JSON.stringify({ message: 'Limit of sent messages reached.' }), { status: 429 });
    }

    const { fullName, phone, email, service, text } = await req.json();


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Форма обратной связи" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `Запрос от ${fullName}`,
      text: text,
      html: `
        <p><strong>Имя:</strong> ${fullName}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Услуга:</strong> ${service}</p>
        <p><strong>Описание:</strong> ${text}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    sendCount++;
    const newSendCount = sendCount + 1;

    const response = new NextResponse(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    response.headers.set('Set-Cookie', `sendCount=${newSendCount}; HttpOnly; Path=/; Max-Age=${24 * 60 * 60}`);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}

