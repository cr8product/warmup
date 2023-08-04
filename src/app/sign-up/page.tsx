"use client";

import {useRouter} from "next/navigation";
import Navbar from "../components/navbar/navbar";
import { useEffect, useState } from "react";
import User from "@/models/userModel";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [user]);

  async function onSignUp() {
    try {
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success", response.data);
      router.push("/sign-in")
    } catch (error:any) {
      console.log("Sign up failed", error.message)
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Sign Up page</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Type username here"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Type email here"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="input input-bordered w-full max-w-xs"
        />
        <label id="email" htmlFor="username">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Type here"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-danger" onClick={onSignUp}>
          {buttonState ? "No Sign up" : "Sign Up"}
        </button>
      </div>
    </>
  );
}
