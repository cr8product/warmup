"use client";
import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import axios from "axios";

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  async function onSignIn(){
    try {
        const response = await axios.post("/api/users/signin")
        
    } catch (error:any) {
        console.log("Sign in failed" + error.message)
        
    }
  }


  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Sign In page</h1>
        <hr />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Type email here"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="input input-bordered w-full max-w-xs"
        />
        <label id="password" htmlFor="username">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Type here"
          onChange={(e) => setUser({...user, password: e.target.value})}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-danger" onClick={onSignIn}>Sign In</button>
      </div>
    </>
  );
}
