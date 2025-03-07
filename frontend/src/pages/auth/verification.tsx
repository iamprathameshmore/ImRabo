import { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/, ""); // Allow only numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const otpValue = otp.join("");

    if (otpValue.length === 6) {
      try {
        const response = await fetch("https://api.example.com/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ otp: otpValue })
        });
        
        const data = await response.json();
        if (response.ok) {
          alert("OTP Verified Successfully!");
        } else {
          setError(data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      }
    } else {
      setError("Please enter a valid 6-digit OTP");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Enter OTP
          </h2>
          <p className="text-center text-sm text-gray-600 mt-2">
            We've sent a verification code to your email.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold focus:outline-none focus:ring-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            ))}
          </div>
          
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 11-8 8z"
                ></path>
              </svg>
            ) : (
              "Verify"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code? {" "}
            <button className="text-indigo-600 font-semibold hover:underline">
              Resend OTP
            </button>
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Not a member? {" "}
            <Link to="/sign-up" className="text-indigo-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default Verification;
