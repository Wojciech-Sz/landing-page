"use client";

import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { POST } from "@/app/api/send/route";
import { Checkbox } from "../ui/checkbox";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    secondName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...initialValues },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    console.log(values);
    await POST({ ...values });
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Imię */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Imię" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nazwisko */}
          <FormField
            control={form.control}
            name="secondName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nazwisko"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefon */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Numer telefonu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Temat */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Temat" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Wiadomość */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Treść wiadomości"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agree */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>
                    Wyrażam zgodę na przetwarzanie moich
                    danych osobowych.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
