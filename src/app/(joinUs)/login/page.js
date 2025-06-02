import { signIn, signOut } from "@/app/_lib/auth";
import React from "react";

export const metadata = {
  title: "Login Page",
};
export default function Login() {
  async function loginwithgoogle() {
    "use server";
    await signIn("google", {
      redirect: "/",
    });
  }
  async function logoutfun() {
    "use server";
    await signOut({
      redirectTo: "/",
    });
  }
  return (
    <>
      <h1>Login Page</h1>
      <form action={loginwithgoogle}>
        <button className="btn btn-success"> Sign IN With Google</button>
      </form>
      <form action={logoutfun}>
        <button className="btn btn-danger"> LogOut</button>
      </form>
    </>
  );
}
