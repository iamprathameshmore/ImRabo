import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const apiUrl = "https://example.com/api/signup";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const requestBody = {
      name,
      email,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup Successful", data);
        alert("Signup Successful");
      } else {
        console.error("Signup Failed", data);
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="p-8 bg-white w-96">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Sign Up to Your Account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
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
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already a member?{" "}
            <Link to="/log-in" className="text-indigo-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default SignUp;
