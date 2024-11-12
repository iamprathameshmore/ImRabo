import { Link } from "react-router-dom";
import EmailInput from "../../components/input/email_input";

import TextInput from "../../components/input/text_input";
import CustomButton from "../../components/button/Custombtn";

function SignUp() {
  return (
    <>
      <div className="h-screen  bg-gray-100">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
              Sign Up
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4">
              <TextInput label="Name" type="text" />
              <EmailInput />

              <div>
                <Link to="/dashboard">
                  <CustomButton label="Sign Up" />
                </Link>
              </div>
            </form>

            <p className="mt-5 text-center text-sm/6 text-gray-500">
              Already a member?{" "}
              <Link
                to="/sign-in"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
