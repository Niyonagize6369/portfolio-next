"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [message, setMessage] = useState("Verifying email...");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("No verification token provided");
      return;
    }

    const verify = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/auth/verify-email/${token}`
        );
        setMessage(res.data.message); // show success message
        setTimeout(() => router.push("/auth/login"), 5000); // redirect after 3 seconds
      } catch (err: any) {
        setError(err.response?.data?.message || "Verification failed");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-green-600">{message}</p>
      )}
    </div>
  );
}
