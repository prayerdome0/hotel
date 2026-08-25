'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Percent,
  Building,
  ShieldCheck,
  Download,
  FileCheck,
  Calculator,
  ArrowUpRight,
} from 'lucide-react';
import { FINANCIAL_METRICS, FINANCIAL_HISTORY, HOTEL_INFO } from '@/data/hotelData';

interface FinancialMetricsProps {
  onOpenDealRoom?: () => void;
}

export default function FinancialMetrics({ onOpenDealRoom }: FinancialMetricsProps) {
  // Interactive Simulator
  const [purchasePrice, setPurchasePrice] = useState(88.5); // in Millions USD
  const [projectedOccupancy, setProjectedOccupancy] = useState(85); // %
  const [targetADR, setTargetADR] = useState(720); // USD

  // Calculate simulated annual revenue and NOI
  // Total Rooms = 240
  const annualAvailableRoomNights = 240 * 365; // 87,600 room nights
  const simulatedOccupiedNights = annualAvailableRoomNights * (projectedOccupancy / 100);
  const simulatedRoomRevenue = (simulatedOccupiedNights * targetADR) / 1000000; // in Millions USD
  const totalRevenue = simulatedRoomRevenue * 1.58; // F&B, Spa, Marina brings additional 58%
  const simulatedNOI = totalRevenue * 0.30; // 30% EBITDA/NOI margin
  const simulatedCapRate = (simulatedNOI / purchasePrice) * 100;

  return (
    <div className="space-y-12">
      {/* 8-Card Key Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {FINANCIAL_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {metric.label}
              </span>
              {metric.change && (
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {metric.change}
                </span>
              )}
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-1">
              {metric.value}
            </div>
            <p className="text-xs text-amber-300/80">
              {metric.subtext}
            </p>
          </div>
        ))}
      </div>

      {/* Financial Pro Forma Table */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileCheck className="w-3.5 h-3.5 text-amber-400" />
              Audited Historical & 5-Year Pro Forma
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
              Executive Financial Pro Forma (2023 – 2027)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Verified by independent tier-1 hospitality audit advisory for {HOTEL_INFO.owner}.
            </p>
          </div>

          {onOpenDealRoom && (
            <button
              onClick={onOpenDealRoom}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold gold-btn flex items-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Full Data Room Audit</span>
            </button>
          )}
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-amber-300 uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Financial Year</th>
                <th className="py-3.5 px-4">Gross Revenue</th>
                <th className="py-3.5 px-4">Occupancy</th>
                <th className="py-3.5 px-4">ADR (USD)</th>
                <th className="py-3.5 px-4">RevPAR</th>
                <th className="py-3.5 px-4">Audited EBITDA</th>
                <th className="py-3.5 px-4">EBITDA Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {FINANCIAL_HISTORY.map((row, idx) => {
                const isCurrent = row.year.includes('Current');
                return (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-800/30 transition ${
                      isCurrent ? 'bg-amber-500/10 font-medium text-white' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-semibold text-white flex items-center gap-2">
                      {row.year}
                      {isCurrent && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/30 text-[10px] text-amber-300 font-bold uppercase">
                          Current
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-100">{row.revenue}</td>
                    <td className="py-4 px-4">{row.occupancy}</td>
                    <td className="py-4 px-4 font-mono">{row.adr}</td>
                    <td className="py-4 px-4 font-mono">{row.revpar}</td>
                    <td className="py-4 px-4 font-bold text-amber-300 font-mono">
                      {row.ebitda}
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-400">
                      {row.margin}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Acquisition Cap Rate & Yield Simulator */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-serif-luxury font-bold text-white">
              Interactive Acquisition Yield Simulator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Adjust purchase valuation and operational parameters to project your net cap rate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* Sliders */}
          <div className="lg:col-span-2 space-y-5 bg-slate-950/60 p-5 rounded-xl border border-slate-800">
            {/* Slider 1: Purchase Price */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Acquisition Valuation Guide:</span>
                <span className="text-amber-300 font-bold font-mono">${purchasePrice.toFixed(1)}M USD</span>
              </div>
              <input
                type="range"
                min="75"
                max="105"
                step="0.5"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$75.0M</span>
                <span>Guide: $88.5M</span>
                <span>$105.0M</span>
              </div>
            </div>

            {/* Slider 2: Occupancy Rate */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Target Annual Occupancy:</span>
                <span className="text-amber-300 font-bold font-mono">{projectedOccupancy}%</span>
              </div>
              <input
                type="range"
                min="70"
                max="95"
                step="1"
                value={projectedOccupancy}
                onChange={(e) => setProjectedOccupancy(parseInt(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>70% (Conservative)</span>
                <span>85% (Baseline)</span>
                <span>95% (Peak)</span>
              </div>
            </div>

            {/* Slider 3: Average Daily Rate */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Target Average Daily Rate (ADR):</span>
                <span className="text-amber-300 font-bold font-mono">${targetADR} USD</span>
              </div>
              <input
                type="range"
                min="600"
                max="950"
                step="10"
                value={targetADR}
                onChange={(e) => setTargetADR(parseInt(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$600</span>
                <span>$720 (Current)</span>
                <span>$950 (Expansion)</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 p-6 rounded-xl border border-amber-500/40 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs text-amber-300 uppercase tracking-wider font-bold">
                Projected Return Metrics
              </span>

              <div>
                <span className="text-xs text-slate-400">Simulated Gross Revenue:</span>
                <div className="text-xl font-bold text-white font-mono">
                  ${totalRevenue.toFixed(1)}M USD/year
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400">Estimated Annual NOI / EBITDA:</span>
                <div className="text-xl font-bold text-emerald-400 font-mono">
                  ${simulatedNOI.toFixed(2)}M USD/year
                </div>
              </div>

              <div className="pt-2 border-t border-amber-500/20">
                <span className="text-xs text-slate-300 font-semibold">Projected Cap Rate:</span>
                <div className="text-3xl font-bold text-amber-300 font-mono">
                  {simulatedCapRate.toFixed(2)}%
                </div>
              </div>
            </div>

            {onOpenDealRoom && (
              <button
                onClick={onOpenDealRoom}
                className="w-full py-2.5 rounded-lg text-xs font-semibold gold-btn text-center"
              >
                Inquire With Custom Model
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
