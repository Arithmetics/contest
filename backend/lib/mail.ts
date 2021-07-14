import { createTransport, getTestMessageUrl } from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';

const testTransport = createTransport({
  host: process.env.MAIL_HOST || '',
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const prodTransport = createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY || '',
  })
);

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
      <p>👍🏻, Brock/p>
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

  const usedTransport = process.env.SENDGRID_API_KEY ? prodTransport : testTransport;
  console.log(`heres the sendgrid key: ${process.env.SENDGRID_API_KEY}`);

  const info = (await usedTransport.sendMail({
    to,
    from: 'no-reply@btbets.ml',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Your Password Reset Token is here!
      <a href="${process.env.FRONTEND_URL}/resetPassword?token=${resetToken}">Click Here to reset</a>
      `),
  })) as MailResponse;

  if (!process.env.SENDGRID_API_KEY) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}
