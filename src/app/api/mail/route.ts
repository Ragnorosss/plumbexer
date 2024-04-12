"use server";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const secretKey = "6LdSKbkpAAAAACFhtMKXNOKmgnpyv8ySp4iTj7m1";
  try {
    // Используйте req.json() для получения данных JSON из тела запроса
    const { fullName, phone, email, service, text,token } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      secure: true,
      auth: {
        user: 'plumbexer@gmail.com',
        pass: 'rpeo potr dxmv tjdk',
      },
    });

    const mailOptions = {
      from: `"Форма обратной связи" <'plumbexer@gmail.com'>`,
      to: "plumbexer@gmail.com",
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
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      { status: 500 },
    );
  }
}
