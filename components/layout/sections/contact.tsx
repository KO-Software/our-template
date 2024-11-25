"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  role: z.string()
});

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      role: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, role } = values;
    
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('Interest List')
        .insert([{ 
          email, 
          role
        }])
        .select();

      if (error) throw error;

      setSubmitStatus('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('An error occurred. Please try again.');
    }
  }

  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          contact
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">interested in chatting?</h2>
        <p className="mb-8 text-muted-foreground">
          fill this out and we'll reach out.
        </p>

        <Card className="bg-muted/60 dark:bg-card mt-2">
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-1.5 text-left">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">topic</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="talent-sourcing">
                              sourcing better talent for your team
                            </SelectItem>
                            <SelectItem value="worker-trial">
                              interested in becoming a probie
                            </SelectItem>
                            <SelectItem value="partnerships">
                              partnerships
                            </SelectItem>
                            <SelectItem value="career">
                              careers on our team </SelectItem>
                            <SelectItem value="other">
                              other inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="mt-4">send message</Button>
              </form>
            </Form>
            {submitStatus && (
              <p className={submitStatus.includes('error') ? 'text-red-500' : 'text-green-500'}>
                {submitStatus}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
