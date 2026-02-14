import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function MobileTopup() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("10");

  return (
    <div className="min-h-screen bg-[#071a13] text-white flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#071a13]/70 border-b border-green-500/10 px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            aria-label="Go back to dashboard"
            className="p-2 rounded-xl bg-green-400/10 text-green-400 hover:bg-green-400/20 active:scale-95 transition"
          >
            ←
          </button>
          <h1 className="text-lg md:text-xl font-bold">
            Mobile Top-up
          </h1>
        </div>

        <button
          aria-label="Mobile phone"
          className="p-2 rounded-xl bg-green-400/10 text-green-400 hover:bg-green-400/20 active:scale-95 transition"
        >
          📱
        </button>
      </header>

      <main className="flex-1 px-4 md:px-6 py-6 space-y-8 pb-32 max-w-md mx-auto w-full">

        {/* OPERATOR SELECT */}
        <section className="bg-green-400/5 rounded-3xl p-6 md:p-8 border border-green-400/10 space-y-6">

          <div>
            <label htmlFor="operator" className="text-xs text-slate-400 block mb-2 font-medium">
              Select Operator
            </label>
            <select
              id="operator"
              className="w-full bg-[#071a13] border border-green-400/20 rounded-2xl px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:ring-2 focus:ring-green-400/50 transition"
            >
              <option>Zong</option>
              <option>Ufone</option>
              <option>Jazz</option>
              <option>Onic</option>
              <option>Telenor</option>
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="text-xs text-slate-400 block mb-2 font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-[#071a13] border border-green-400/20 rounded-2xl px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:ring-2 focus:ring-green-400/50 transition"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-3 font-medium">
              Select Plan
            </label>

            <div className="grid grid-cols-3 gap-3">
              {["10", "20", "50"].map((price) => (
                <button
                  key={price}
                  onClick={() => setPlan(price)}
                  className={`py-3 md:py-4 rounded-2xl border font-bold text-sm md:text-base transition-all duration-200 ${
                    plan === price
                      ? "bg-green-400 text-[#071a13] border-green-400 shadow-lg shadow-green-400/20"
                      : "bg-[#071a13] border-green-400/20 hover:border-green-400/40 active:scale-95"
                  }`}
                >
                  ${price}
                </button>
              ))}
            </div>
          </div>

        </section>

        {/* RECENT TOPUPS */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-green-400/60">
              Recent Recharges
            </h2>
            <button className="text-xs font-bold text-green-400 hover:text-green-300 transition">
              View All
            </button>
          </div>

          <RechargeItem
            phone="+1 234 567 890"
            amount="$20"
            date="Today, 1:30 PM"
          />

          <RechargeItem
            phone="+1 987 654 321"
            amount="$10"
            date="Yesterday, 6:45 PM"
          />

        </section>

      </main>

      {/* BOTTOM BUTTON */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:p-6 backdrop-blur-xl bg-[#071a13]/95 border-t border-green-400/20">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:opacity-90 active:scale-95 py-4 md:py-5 rounded-2xl text-[#071a13] font-bold text-base md:text-lg shadow-lg transition-all duration-200">
            Recharge ${plan}
          </button>
        </div>
      </div>

    </div>
  );
}

function RechargeItem({ phone, amount, date }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 mb-3 hover:bg-white/10 transition-colors duration-200">
      <div>
        <p className="font-bold text-sm md:text-base">{phone}</p>
        <p className="text-xs text-slate-400 mt-1">{date}</p>
      </div>

      <p className="text-green-400 font-bold text-sm md:text-base">{amount}</p>
    </div>
  );
}
