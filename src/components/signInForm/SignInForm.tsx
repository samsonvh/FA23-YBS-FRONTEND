"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-4/6">
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage className="mx-2 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-4/6">
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage className="mx-2 text-xs" />
            </FormItem>
          )}
        />
        <Link
          href="forgot"
          className="text-right text-sm -translate-y-2 w-4/6 hover:underline"
        >
          Forgot password?
        </Link>
        <Button
          type="submit"
          className="w-fit bg-[#0B4D8F] hover:bg-[#D8A93F] hover:text-black"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
