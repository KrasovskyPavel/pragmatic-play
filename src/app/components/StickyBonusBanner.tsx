'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function StickyBonusBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Content */}
              <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex-shrink-0">
                  <Gift className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-black text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 uppercase truncate">
                    🎁 BONUS: 150% + 300FS
                  </div>
                  <div className="text-white/90 text-xs uppercase hidden sm:block">
                    Limited time offer • New players only
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href="https://bestslotgames.top/PbvqCSBq"
                  rel="nofollow"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-100 text-orange-600 font-black text-xs sm:text-sm rounded-md transition-all hover:scale-105 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 shadow-lg uppercase"
                >
                  CLAIM NOW
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
                <button
                  onClick={() => setIsClosed(true)}
                  className="text-white hover:text-white/80 transition-colors p-1"
                  aria-label="Close banner"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}