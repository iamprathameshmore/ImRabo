"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { 
    InputOTP, 
    InputOTPGroup, 
    InputOTPSeparator, 
    InputOTPSlot 
} from "@/components/ui/input-otp";

export default function VerifyPage() {
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (!storedEmail) {
           toast.error("No email found. Redirecting...");
            router.push("/"); // Redirect to login if no email found
        } else {
            setEmail(storedEmail);
        }
    }, [router]);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 4) {
           toast.error("OTP must be 4 digits.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();

            if (response.ok) {
               toast.success("✅ Login successful!");
                sessionStorage.setItem("token", data.token); // Store JWT token
                sessionStorage.removeItem("email"); // Remove email after successful login
                router.push("/dashboard"); // Redirect to dashboard
            } else {
               toast.error(data.msg || "Invalid OTP. Try again.");
            }
        } catch (error) {
           toast.error("❌ Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
            <Toaster /> {/*toast notifications renderer */}
            <div className="w-full max-w-sm text-center">
                <h1 className="text-xl font-bold">Enter OTP</h1>
                <p className="text-sm text-gray-600">A 4-digit code was sent to {email}</p>

                <form onSubmit={handleVerify} className="mt-6 space-y-6 w-full flex flex-col items-center">
                    <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>

                    <Button type="submit" className="w-full max-w-sm" disabled={otp.length !== 4 || loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </Button>
                </form>

                <p className="text-sm mt-4">
                    Didn't receive the code?{" "}
                    <button 
                        onClick={() =>toast.info("Resending OTP...")} 
                        className="underline text-blue-600 hover:text-blue-800"
                    >
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
}
