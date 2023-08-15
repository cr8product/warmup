"use client"
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email:"",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if( user.email.length >0 && user.password.length >0) {
            setButtonDisabled(false)
        }else {
            setButtonDisabled(true)
        }
    }, [user])

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log("Login success", response.data)
            router.push("/profile");
            
        } catch (error:any) {
            console.log("Login failed", error.message)
        }finally {setLoading(false)}
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">{loading ? "Processing": "Login"}</h1>
            <hr />

            <label htmlFor="email"> email</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(event) => setUser({...user, email: event.target.value})}
                placeholder="email"
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
            
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"    
            >{buttonDisabled ? "No Login": "Login"}</button>
            <Link href="/signup">Visit SignUp</Link>
        </div>
    )
}