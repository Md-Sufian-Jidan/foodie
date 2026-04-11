import nodemailer from "nodemailer";

export const sendEmail = async ({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) => {
    try {
        // ✅ Transporter config
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your gmail
                pass: process.env.EMAIL_PASS, // app password
            },
        });

        // ✅ Mail Options
        const mailOptions = {
            from: `"MealMate Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL, // where you want to receive mail
            subject: `📩 ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📬 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        };

        // ✅ Send Mail
        const info = await transporter.sendMail(mailOptions);
        
        // ✅ Send Confirmation Email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "We received your message 🍽️",
            html: `
    <h3>Hello ${name},</h3>
    <p>Thanks for contacting MealMate. We'll get back to you soon.</p>
  `,
        });

        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error) {
        console.error("Email Error:", error);
        return {
            success: false,
            error,
        };
    }
};