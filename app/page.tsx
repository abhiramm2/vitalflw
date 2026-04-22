"use client";

import { Activity, Zap, Calendar, ShieldCheck, Receipt } from "lucide-react";
import { motion } from "framer-motion";
import Antigravity from "@/components/ui/antigravity";

import Image from "next/image";

export default function ComingSoonPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-20 font-sans">
      {/* Antigravity Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#06B6D4"
          autoAnimate={true}
          particleVariance={1}
        />
      </div>

      {/* Decorative blurred gradient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-[#3730A3]/5 to-[#06B6D4]/5 blur-[100px] z-0"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 text-center"
      >
        {/* Logo / Brand mark */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="VitalFlw Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            VitalFlw
          </span>
        </motion.div>

        {/* Hero headline & Sub */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          {/* Status badge */}
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-600">
              In Active Development
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1] max-w-3xl">
            The Future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3730A3] to-[#06B6D4]">
              Clinic Management
            </span>{" "}
            is Loading.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            We're building a faster, smarter EMR and billing platform designed specifically for modern clinics. No legacy bloat — just clean workflows.
          </p>
        </motion.div>

        {/* Feature badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 pt-6">
          {[
            { text: "Instant Records", icon: Zap },
            { text: "Smart Scheduling", icon: Calendar },
            { text: "Automated Billing", icon: Receipt },
            { text: "Bank-Grade Security", icon: ShieldCheck },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-500 transition-all shadow-sm hover:shadow hover:border-slate-300 hover:text-slate-700 hover:bg-white"
            >
              <feature.icon className="h-3.5 w-3.5 text-slate-400" />
              {feature.text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
