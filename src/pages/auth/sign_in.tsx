import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import EmailInput from "../../components/input/email_input";
import CustomButton from "../../components/button/Custombtn";

function SignIn() {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 ">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Sign In
        </h2>

        <div className="mt-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <EmailInput value={email} onChange={handleEmailChange} />
          </div>
          <div className="my-4" />
          <div>
            {" "}
            <Link to="/dashboard">
              <CustomButton label="Sign In" type="submit" />
            </Link>
          </div>
        </form>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/sign-up"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
