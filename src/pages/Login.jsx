import React from "react";
import { useLoaderData, Form, redirect ,useActionData ,useNavigation} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
export async function action({ request }) {
  const formdata = await request.formData();
  const email = formdata.get("email");
  const password = formdata.get("password");
  try {
    const data = await loginUser({ email, password });
  localStorage.setItem("loggedin", true);
  return redirect("/host");
  } catch (error) {
    return error.message
    
  }
  
}
export default function Login() {
  const message = useLoaderData();
  const navigation = useNavigation()
  const errorMessage = useActionData()


  return (
    <div className="flex flex-col items-center px-6 ">
      <h1 className="font-bold text-3xl my-3">Sign in to your account</h1>
      <Form
        replace
        method="post"
        className="flex flex-col w-full max-w-[500px] login-form text-center"
      >
        {message && (
          <h2 className="text-2xl text-red-600 mb-2 font-bold">{message}</h2>
        )}
        {errorMessage && (
          <h2 className="text-2xl text-red-600 mb-2 font-bold">
            {errorMessage}
          </h2>
        )}

        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button
          className="bg-[#FF8C38] w-full h-14 mt-3 text-white rounded-md"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in ..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
