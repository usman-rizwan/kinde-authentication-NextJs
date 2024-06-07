"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function SingnupPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <LoginLink className="bg-blue-500 rounded text-white text-xl p-5">
        Login Now{" "}
      </LoginLink>
    </div>
  );
}
