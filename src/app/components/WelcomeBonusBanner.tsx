"use client";

import { motion } from "motion/react";
import { Play, Gift, TrendingUp } from "lucide-react";
import { ExternalLink } from "lucide-react";

export function WelcomeBonusBanner() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-xs sm:text-sm mb-4 sm:mb-6">
            <TrendingUp size={14} className="sm:w-4 sm:h-4" />
            LIMITED TIME OFFER
          </div>

          {/* Headline */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 uppercase leading-tight">
            UP TO 150% BONUS
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 uppercase leading-tight">
            + $200,000 WELCOME PACKAGE
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join now and claim your exclusive welcome bonus! Play our premium slots and win big at
            the best online casinos.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-white">
              <Gift size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">300 Free Spins</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Play size={18} className="fill-current sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">1000+ Slots</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">Instant Payouts</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://bestslotgames.top/PbvqCSBq"
              rel="nofollow"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white hover:bg-gray-100 text-orange-600 font-black text-base sm:text-lg md:text-xl rounded-lg transition-all hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              CLAIM NOW
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://bestslotgames.top/PbvqCSBq"
              rel="nofollow"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-transparent hover:bg-white/10 text-white font-black text-base sm:text-lg md:text-xl rounded-lg transition-all border-2 border-white inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              View All Slots
            </a>
          </div>

          {/* Terms */}
          <p className="text-xs sm:text-sm text-white/80 mt-4 sm:mt-6 uppercase font-semibold">
            18+ | T&C Apply | New Players Only | Gamble Responsibly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
