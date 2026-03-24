/**
 * MA TUTORS Payment Service (Razorpay Mock)
 * 💳 Secure Transaction Orchestration
 */

const delay = () => new Promise(res => setTimeout(res, 1500));

export const PaymentService = {
    // 🛡️ Step 1: Initialize Checkout
    initiateLeadUnlock: async (tutorId, amount) => {
        await delay();
        console.log(`INITIALIZING RAZORPAY FOR TUTOR ${tutorId} - AMOUNT: ₹${amount}`);
        return {
            order_id: `order_${Math.random().toString(36).substr(2, 9)}`,
            amount: amount * 100, // in paise
            currency: "INR"
        };
    },

    // ✅ Step 2: Handle Success
    processPaymentResponse: async (response) => {
        await delay();
        console.log("PAYMENT VERIFIED", response);
        return { success: true, transaction_id: "txn_987654321" };
    },

    // 🎓 Student Commitment Fee
    initiateDemoBooking: async (studentId, tutorId) => {
        await delay();
        return {
            order_id: `booking_${Math.random().toString(36).substr(2, 9)}`,
            amount: 9900,
            currency: "INR"
        };
    }
};
