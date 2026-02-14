import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function ExpenseAnalytics() {
  // ----- Dummy Data -----
  const expenses = {
    Electricity: 12500,
    Water: 2300,
    Internet: 4500,
    Banking: 1800,
  };

  const labels = Object.keys(expenses);
  const values = Object.values(expenses);
  const total = values.reduce((a, b) => a + b, 0);
  const highestCategory = labels[values.indexOf(Math.max(...values))];
  const highestValue = Math.max(...values);
  const month = new Date().toLocaleString("default", { month: "long", year: "numeric" });

  // ----- Chart Config -----
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(34, 197, 94, 0.6)",
          "rgba(34, 197, 94, 0.45)",
          "rgba(34, 197, 94, 0.35)",
          "rgba(34, 197, 94, 0.25)",
        ],
        borderColor: [
          "rgba(34, 197, 94, 0.9)",
          "rgba(34, 197, 94, 0.75)",
          "rgba(34, 197, 94, 0.6)",
          "rgba(34, 197, 94, 0.5)",
        ],
        borderWidth: 1.5,
        borderRadius: 14,
        borderSkipped: false,
        barThickness: 48,
        hoverBackgroundColor: "rgba(34, 197, 94, 0.85)",
        hoverBorderColor: "rgba(34, 197, 94, 1)",
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(34, 197, 94, 0.5)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        titleFont: { size: 13, weight: "600" },
        bodyFont: { size: 14, weight: "bold" },
        callbacks: {
          label: (ctx) => `PKR ${ctx.raw.toLocaleString()}`,
          afterLabel: () => " ",
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          color: "rgba(255, 255, 255, 0.6)",
          font: { size: 12, weight: "500" },
          padding: 8,
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(34, 197, 94, 0.08)", drawBorder: false },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
          font: { size: 11 },
          padding: 8,
          callback: (val) => (val === 0 ? "0" : `PKR ${(val / 1000).toFixed(0)}k`),
        },
      },
    },
  };

  return (
    <div className="relative rounded-3xl p-6 md:p-8 h-full overflow-hidden bg-gradient-to-br from-[#0f3b2b] via-[#0b2e22] to-[#062017] shadow-2xl border border-green-500/15 flex flex-col">

      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400 opacity-8 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-500 opacity-5 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 mb-6 pb-5 border-b border-green-500/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Left: Title and Month */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Monthly Expense Analytics
            </h3>
            <p className="text-green-400/60 text-xs font-medium mt-1 tracking-wide uppercase">
              {month}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="flex gap-6">
            {/* Total */}
            <div className="flex flex-col">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Total</span>
              <span className="text-green-400 font-bold text-lg mt-1">
                PKR {total.toLocaleString()}
              </span>
            </div>

            {/* Highest Spending */}
            <div className="flex flex-col">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Highest</span>
              <span className="text-white font-bold text-lg mt-1">
                {highestCategory}
              </span>
              <span className="text-green-400/70 text-xs mt-0.5">
                PKR {highestValue.toLocaleString()}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Chart Container */}
      <div className="relative z-10 flex-1 min-h-0">
        <Bar data={data} options={options} height={null} />
      </div>

    </div>
  );
}
