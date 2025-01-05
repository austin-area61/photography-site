import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Create the transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure SMTP port
      secure: true, // Use SSL
      auth: {
        user: "austinaxwell@gmail.com", // Sender email from .env.local
        pass: "tvnw juxl uggx jwfs", // App-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: "austinaxwell@gmail.com", // Sender's email
      to: "austinaxwell@gmail.com", // Recipient's email
      subject: `New Booking Inquiry from ${data.name}`,
      html: `
        <h3>Booking Inquiry</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Type of Shoot:</strong> ${data.shootType}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    // Log error details
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        message: "Error sending email",
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
