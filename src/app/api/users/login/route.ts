import User from "@/models/useModel";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User doesn't exist"}, {status: 400})
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error: "Password doesn't match"}, {status: 400})
        }

        // create user token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({messge: "Login successfull", success: true})
        response.cookies.set("token", token, {httpOnly: true,})
        return response;
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}
