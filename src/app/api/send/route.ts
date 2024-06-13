"use server";
import EmailTemplate from "@/components/emails/EmailTemplate";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { firstName } = req.body;
    console.log(firstName);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["w.szczygielski00@gmail.com"],
      subject: "elo",
      react: EmailTemplate({ firstName: "ala" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
