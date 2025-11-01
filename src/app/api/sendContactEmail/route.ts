import { sendEmail } from "@/utils/sendEmail";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const message = body.message;
  await sendEmail({
    to: "abderrahmanebensmat@gmail.com",
    subject: "Message From Portfolio",
    html: message,
    text: message,
  });
  return new Response(JSON.stringify({ success: "true" }));
};
