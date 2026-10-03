"use client";
import FormAuth from "./FormAuth";
import FormField from "./ui/FormField";
import SubmitButton from "./ui/SubmitButton";
import { ResetPassword } from "../services/auth";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormResetPasswordProps {
token: string;
email: string;
}

const FormResetPassword = ({
token,
email,
}: FormResetPasswordProps) => {
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  

    if (loading) return;  

    setError("");  
    setLoading(true);  

    const formData = new FormData(e.currentTarget);  

    const password = formData.get("password") as string;  
    const password_confirmation = formData.get("password_confirmation") as string;  

    if (password !== password_confirmation) {  
        setError("Passwords do not match.");  
        setLoading(false);  
        return;  
    }  
    try {  
        await ResetPassword({  
            token,  
            email,  
            password,  
            password_confirmation  
        });  
        router.replace("/auth/login");  
    } catch (err) {  
        if (axios.isAxiosError(err)) {  
            setError(  
                err.response?.data?.errors?.password?.[0] ||  
                    err.response?.data?.message ||  
                    "Unable to reset password."  
            );  
        } else {  
            setError("Unable to reset password.");  
        }  
    } finally {  
        setLoading(false);  
    }  
};  
return (  
    <FormAuth  
        title="Reset Password"  
        description="Enter your new password below."  
        onSubmit={handleSubmit}  
        showBack={false}  
    >  
        {/* Password Input Field */}  
        <FormField  
            id="password"  
            name="password"  
            label="Password"  
            type="password"  
            placeholder="Enter your password"  
            autoComplete="new-password"  
            required  
        />  
        {/* Confirm Password Input Field */}  
        <FormField  
            id="password_confirmation"  
            name="password_confirmation"  
            label="Confirm Password"  
            type="password"  
            placeholder="Confirm your password"  
            autoComplete="new-password"  
            required  
        />  
        {/* Submit Button Field */}  
        <SubmitButton loading={loading} loadingText="Changing...">  
            Change Password  
        </SubmitButton>  
        {error && <p className="text-sm text-red-500 mt-2 ml-1">{error}</p>}  
    </FormAuth>  
);

};

export default FormResetPassword;
