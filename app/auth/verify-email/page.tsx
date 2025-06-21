"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      // setMessage("Invalid or missing verification token.");
      return;
    }

    const verify = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/api/v1/auth/verify-email/${token}`
        );
        setStatus("success");
        setMessage(res.data.message || "Email verified successfully!");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/login");
        }, 10000);
      } catch (err: any) {
        setStatus("error");
        if (err.response?.data?.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage(
            "Verification failed. Please try again or request a new link."
          );
        }
      }
    };

    verify();
  }, [token, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4">
      <div className="text-center bg-gray-500 p-8 rounded-xl shadow-lg max-w-md">
        {status === "verifying" && (
          <p className="text-gray-600">Verifying your email...</p>
        )}

        {status === "success" && (
          <div className="text-green-600">
            <h2 className="text-2xl font-semibold mb-2">Success!</h2>
            {/* <p>{message}</p> */}
            <p className="mt-4 text-sm text-gray-500">
              Redirecting to login...
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="text-black">
            {/* <h2 className="text-2xl font-semibold mb-2">Oops!</h2> */}
            <p>{message}</p>
            <button
              onClick={() => router.push("/login")}
              className="mt-4 bg-sky-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Go to Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
