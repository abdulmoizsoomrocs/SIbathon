import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { supabase } from "../supabaseClient";


export default function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
 
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) {
    alert("Invalid credentials");
    setLoading(false);
    return;
  }

  navigate("/dashboard");
  setLoading(false);
};


  return (
    <div className="relative flex min-h-screen bg-[#071a13] overflow-hidden font-sans text-white">

      {/* Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-[45%] xl:w-[40%] lg:px-16 xl:px-24 backdrop-blur-2xl bg-[#0c241a]/70 border-r border-white/10">

        {/* Logo */}
        <div className="absolute top-10 left-6 lg:left-16 xl:left-24 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg animate-bounce">
            <span className="font-bold">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            FinTech
          </span>
        </div>

        {/* Header */}
        <div className="mb-10 animate-fadeIn">
          
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              Email Address
            </label>
            <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="name@company.com"
              className="w-full h-14 px-4 rounded-2xl bg-[#0f2e22] border border-white/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300 outline-none"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              Password
            </label>

            <div className="relative">
              <input
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="••••••••"
                className="w-full h-14 px-4 pr-14 rounded-2xl bg-[#0f2e22] border border-white/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-green-400 text-sm font-medium transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/60">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="font-semibold text-green-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
  type="submit"
  disabled={loading}
  className="h-14 w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-green-500/40 active:scale-[0.98] disabled:opacity-60"
>
  {loading ? "Logging in..." : "Login"}
</button>
          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#0c241a] px-4 text-white/50">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="h-12 rounded-2xl bg-[#0f2e22] border border-white/10 hover:bg-[#133a2a] transition font-semibold">
              Google
            </button>
            <button className="h-12 rounded-2xl bg-[#0f2e22] border border-white/10 hover:bg-[#133a2a] transition font-semibold">
              Apple
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white/50">
          Don’t have an account?{" "}
         <Link to="/register" className="font-bold text-green-400 hover:underline">
  Create an account
</Link>
        </p>
      </div>

      {/* RIGHT SIDE VISUAL */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative items-center justify-center bg-gradient-to-br from-green-600 to-emerald-800 overflow-hidden">

        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-spin-slow"></div>

        <div className="relative text-center px-12 max-w-xl animate-fadeInUp">
          <div className="mb-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">

            <div className="flex items-end justify-between gap-2 h-40">
              <div className="w-full bg-white/20 rounded-t-lg h-[40%] animate-grow" />
              <div className="w-full bg-white/40 rounded-t-lg h-[65%] animate-grow delay-75" />
              <div className="w-full bg-white/30 rounded-t-lg h-[50%] animate-grow delay-100" />
              <div className="w-full bg-white/60 rounded-t-lg h-[85%] animate-grow delay-150" />
              <div className="w-full bg-white/40 rounded-t-lg h-[60%] animate-grow delay-200" />
              <div className="w-full bg-white/80 rounded-t-lg h-[100%] animate-grow delay-300" />
            </div>

          </div>

          <h2 className="text-4xl font-extrabold lg:text-5xl">
            The smarter way to manage your wealth.
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Join over 2 million users saving, investing, and growing their
            financial future.
          </p>
        </div>

        <div className="absolute bottom-10 w-full text-center text-sm text-white/50">
          © 2026 FinTech Global Inc.
        </div>
      </div>
    </div>
  );
}