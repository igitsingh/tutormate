/**
 * MA TUTORS Auth Service
 * 🔐 OTP-Based Authentication & Session Management
 */

const delay = () => new Promise(res => setTimeout(res, 1000));

export const AuthService = {
    // 📨 Step 1: Send OTP to Phone
    sendOtp: async (phone) => {
        await delay();
        console.log("SENDING OTP TO", phone);
        return { success: true, message: "OTP sent successfully" };
    },

    // 🔑 Step 2: Verify OTP
    verifyOtp: async (phone, otp) => {
        await delay();
        if (otp === '123456') { // Mock verification
            const user = {
                id: 'usr_123',
                phone: phone,
                name: 'Gautam',
                role: phone.endsWith('0') ? 'TUTOR' : 'STUDENT',
                is_onboarded: true
            };
            localStorage.setItem('ma_user', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: "Invalid OTP" };
    },

    // 👤 Get Current User (Persistence)
    getCurrentUser: () => {
        const user = localStorage.getItem('ma_user');
        return user ? JSON.parse(user) : null;
    },

    // 🚪 Logout
    logout: () => {
        localStorage.removeItem('ma_user');
        window.location.href = '/';
    }
};
