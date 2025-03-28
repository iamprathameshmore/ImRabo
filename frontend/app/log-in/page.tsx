"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();



  useEffect(() => {
    const token = sessionStorage.getItem("token"); // Check if the token exists
    if (token) {
      router.push("/dashboard"); // Redirect if already authenticated
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);



    try {
      const response = await fetch(`${process.env.API_URL}/auth/log-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent! Please verify your email.");
        sessionStorage.setItem("email", email); // Store email temporarily
        router.push("/verification"); // Redirect to verification screen
      } else {
        setError(data.msg || "Login failed. Please try again.");
        toast.error(data.msg || "Login failed.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                aria-label="Imrabo Logo"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  {/* Add your logo icon here */}
                </div>
                <span className="sr-only">Imrabo</span>
              </a>
              <h1 className="text-xl font-bold">Welcome to Imrabo</h1>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="w-full" disabled={!email || loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
