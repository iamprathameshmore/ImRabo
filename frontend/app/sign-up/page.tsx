"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  
  
  
    useEffect(() => {
      const token = sessionStorage.getItem("token"); // Check if the token exists
      if (token) {
        router.push("/dashboard"); // Redirect if already authenticated
      }
    }, [router]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${process.env.API_URL}/auth/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent to your email!");
        sessionStorage.setItem("email", email); // Store email for verification
        router.push("/verification"); // Redirect to OTP verification page
      } else {
        toast.error(data.msg || "Signup failed.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a href="#" className="flex flex-col items-center gap-2 font-medium">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md">
                    <GalleryVerticalEnd className="size-6" />
                  </div>
                  <span className="sr-only">Acme Inc.</span>
                </a>
                <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <a href="/log-in" className="underline underline-offset-4">
                    Login
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending OTP..." : "Sign Up"}
                </Button>
              </div>
            </div>
          </form>

          <div className="text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">Terms of Service</a> and{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
