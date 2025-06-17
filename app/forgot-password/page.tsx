"use client";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Reset link sent to your email.");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl font-bold">Forgot Password</h1>
        <input
          type="email"
          placeholder="Your email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Reset Link
        </button>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
