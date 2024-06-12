import EmailTemplate from "@/components/emails/EmailTemplate";
import { ContactFormProps } from "@/types";
import { Resend } from "resend";

const resend = new Resend(
  process.env.NEXT_PUBLIC_RESEND_API_KEY
);

export async function POST({
  firstName,
  secondName,
  phoneNumber,
  email,
  subject,
  message,
}: ContactFormProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: ["wojtek.bakugan@gmail.com"],
      subject,
      react: EmailTemplate({
        firstName,
        secondName,
        phoneNumber,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
