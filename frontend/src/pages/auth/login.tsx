import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../../components/logo";

const apiUrl = "https://example.com/api/login";

const Login: React.FC = () => {
  const [Email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  interface ApiResponse {
    message?: string;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", Email);
    setLoading(true);

    const requestBody = { email: Email };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        toast.success("🎉 Login Successful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
        });
      } else {
        toast.error(data.message || "❌ Login Failed! Try Again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("🚨 Network Error! Please check your connection.", {
        position: "top-center",
        autoClose: 3000,
        icon: false,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <ToastContainer />
        <div className="w-full max-w-sm bg-white rounded-lg p-6">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Log In to your account
          </h2>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
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
                "Log In"
              )}
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/sign-up"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Login;
