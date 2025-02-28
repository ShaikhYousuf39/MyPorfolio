import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, role, message } = await req.json();

    if (!name || !role || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields." }), {
        status: 400,
      });
    }

    const emailContent = `
      Name: ${name}
      ${company ? `Company: ${company}` : ""}
      Role: ${role}
      Message: ${message}
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",  
      to: "yousufshaikh381@gmail.com",  
      subject: `New Hire Me Request from ${name}`,
      text: emailContent.trim(),
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
