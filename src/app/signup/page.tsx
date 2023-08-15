"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email:"",
        password: "",
        username: "",
    })
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (user.email.length >0 && user.username.length >0 && user.password.length >0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        } 
    }, [user])

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);   
            console.log("Signup succeeded", response.data);
            router.push("/login")
        } catch (error) {
            console.log("Signup failed", error.message);
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">{loading ? "Processing" : "Sign up"}</h1>
            <hr />

            <label htmlFor="username"> username</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(event) => setUser({...user, username: event.target.value})}
                placeholder="username"
                />
            <label htmlFor="password"> password</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(event) => setUser({...user, password: event.target.value})}
                placeholder="password"
                />
            <label htmlFor="email"> email</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(event) => setUser({...user, email: event.target.value})}
                placeholder="email"
                />
            <button
                onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"    
            >{buttonDisabled ? "No Signup" : "Sign up"}</button>
            <Link href="/login">Visit login</Link>
        </div>
    )
}