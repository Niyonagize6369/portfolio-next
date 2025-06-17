"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Password reset successfully. You can log in now.");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      setMessage("⚠️ Error resetting password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleReset} className="space-y-4">
        <h1 className="text-xl font-bold">Reset Your Password</h1>
        <input
          type="password"
          placeholder="New password"
          className="p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Reset Password
        </button>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
