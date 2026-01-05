import { createTransport, getTestMessageUrl } from 'nodemailer';
import { Resend } from 'resend';

// Test transport for development (e.g., Ethereal Email, Mailtrap, or local SMTP)
const testTransport = createTransport({
  host: process.env.MAIL_HOST || 'smtp.ethereal.email',
  port: Number(process.env.MAIL_PORT) || 587,
  auth: {
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
  },
});

// Production transport using Resend SDK (free tier: 3,000 emails/month)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function makeANiceEmail(text: string): string {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello,</h2>
      <p>${text}</p>
      <p>👍🏻,</p> 
      <p>Brock</p>
    </div>
  `;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

export async function sendPasswordResetEmail(resetToken: string, to: string): Promise<void> {
  // email the user a token
  console.log('sendPasswordResetEmail got here');

  const emailHtml = makeANiceEmail(`Your Password Reset Token is here ->
    <a href="${process.env.FRONTEND_URL}/resetPassword?token=${resetToken}">Click Here to reset</a>
    `);

  if (resend) {
    // Use Resend SDK for production
    await resend.emails.send({
      from: 'no-reply@btbets.dev',
      to,
      subject: 'Your password reset token',
      html: emailHtml,
    });
  } else {
    // Use test transport for development
    const info = await testTransport.sendMail({
      to,
      from: 'no-reply@btbets.dev',
      subject: 'Your password reset token',
      html: emailHtml,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}

export async function sendStandingsUpdate(
  updates: Record<string, string>,
  to: string
): Promise<void> {
  // email updates to standings

  const htmlList = `<ul>${Object.keys(updates).map(
    (team) => `<li>${team}: ${updates[team]}</li>`
  )}</ul>`;

  const emailHtml = makeANiceEmail(htmlList);

  if (resend) {
    // Use Resend SDK for production
    await resend.emails.send({
      from: 'no-reply@btbets.dev',
      to,
      subject: 'New Over Under Locked Up',
      html: emailHtml,
    });
  } else {
    // Use test transport for development
    const info = await testTransport.sendMail({
      to,
      from: 'no-reply@btbets.dev',
      subject: 'New Over Under Locked Up',
      html: emailHtml,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}
