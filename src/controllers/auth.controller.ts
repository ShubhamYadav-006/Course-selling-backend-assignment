import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt,
            },
        });
    } catch (error: any) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

export const login = async (req: Request, res: Response) => {
    console.log("New Login Function Running");
    try {
        const { email, password } = req.body;

        // Step 1: Find user by email
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        // Step 2: Check if user exists
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                
            });
        }

        // Step 3: Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid password",
                
            });
        }

        // Step 4: Generate JWT Token
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "1d",
            }
        );

        // Step 5: Send Response
        return res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            },
        });
    } catch (error: any) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};