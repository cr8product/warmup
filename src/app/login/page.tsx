"use client"

import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
    const [user, setUser] = useState({
        email:"",
        password: "",
    })

    const onLogin = async () => {

    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">Login</h1>
            <hr />

            <label htmlFor="email"> email</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(event) => setUser({...user, email: event.target.value})}
                placeholder="email"
                />
            <label htmlFor="password"> password</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(event) => setUser({...user, password: event.target.value})}
                placeholder="password"
                />
            
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"    
            >Login Here</button>
            <Link href="/signup">Visit SignUp</Link>
        </div>
    )
}