// SignUp.tsx
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Button, InputIcon } from "../../components";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/ui/input";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Toastr } from "../../components/toastr";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must have at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "The email must follow the pattern: email@example.com.",
  }),
  password: z.string().min(5, {
    message: "The password must have at least 5 characters.",
  }),
});

const SignUp: React.FC = () => {
  const [loading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await signUp(data, navigate);
      Toastr.success("Registration successful!");
    } catch (error) {
      Toastr.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-secondary">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-4xl font-semibold text-primary mb-6">
          Create your account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <InputIcon icon={FiUser} className="bg-primary border-black text-white" />
                      <Input
                        placeholder="Username"
                        {...field}
                        className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                      />
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <InputIcon icon={FiMail} className="bg-primary border-black text-white" />
                      <Input
                        placeholder="Email"
                        {...field}
                        className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                      />
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <InputIcon icon={FiLock} className="bg-primary border-black text-white" />
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                      />
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-secondary hover:text-primary border border-primary transition-colors duration-300"
              type="submit"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Please wait
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <Link
            to={"/"}
            className="text-primary mt-6 underline font-semibold text-end"
          >
            Already have an account?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
