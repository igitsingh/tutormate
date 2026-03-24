import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

/**
 * TutorMate Auth Service
 * 🔐 Real Firebase OTP-Based Authentication & Session Management
 */

export const AuthService = {
    // 📨 Step 1: Send OTP to Phone
    sendOtp: async (phone) => {
        try {
            // Ensure phone starts with +91 if not provided
            const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;
            
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                    'size': 'invisible',
                    'callback': (response) => {
                        console.log("reCAPTCHA verified");
                    }
                });
            }

            const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
            return { success: true, confirmationResult };
        } catch (error) {
            console.error("Error sending OTP:", error);
            return { success: false, message: error.message };
        }
    },

    // 🔑 Step 2: Verify OTP and Sync with Backend
    verifyOtp: async (confirmationResult, otp) => {
        try {
            const result = await confirmationResult.confirm(otp);
            const firebaseUser = result.user;

            // 🚀 Sync with Backend for JWT
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: firebaseUser.phoneNumber })
            });

            const data = await response.json();
            
            if (data.token) {
                localStorage.setItem("tutormate_token", data.token);
                localStorage.setItem("tutormate_user", JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                return { success: false, message: "Backend sync failed" };
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            return { success: false, message: "Invalid OTP or session expired" };
        }
    },

    // 👤 Get Current User
    getCurrentUser: () => {
        const user = localStorage.getItem('tutormate_user');
        return user ? JSON.parse(user) : null;
    },

    // 🚪 Logout
    logout: () => {
        localStorage.removeItem('tutormate_token');
        localStorage.removeItem('tutormate_user');
        auth.signOut();
        window.location.href = '/';
    }
};

