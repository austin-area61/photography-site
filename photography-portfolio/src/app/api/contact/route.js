import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const body = await req.json(); // Parse incoming JSON
    const { name, email, currency, budget, shootType, message } = body;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service
      auth: {
        user: "austinaxwell@gmail.com", // Your email
        pass: "2acc309662", // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "austinaxwell@gmail.com", // Photographer's email
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${currency} ${budget}
        Type of Shoot: ${shootType}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}
