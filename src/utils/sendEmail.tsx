// sendMailjet.ts
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.NEXT_PUBLIC_MJ_APIKEY_PUBLIC as string,
  process.env.MJ_APIKEY_PRIVATE as string
);

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.BUSINESS_EMAIL, // e.g. "send@exmonde.com"
          Name: "Exmonde",
        },
        To: [{ Email: to }],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });

  const res = await request;
  // res.body contains info about the sent message
  return res.body;
}
