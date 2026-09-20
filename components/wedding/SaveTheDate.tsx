"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

/* =============================================================
   SMALL ATMOSPHERIC BUBBLES

   Pink translucent glass bubbles.
   More visible than before, but still transparent enough
   to allow the invitation card to remain clearly readable.
============================================================= */

const bubbles = [
  // Left side
  { startX: "3%", startY: "18%", size: 27, delay: 0, duration: 13 },
  { startX: "10%", startY: "42%", size: 16, delay: 2, duration: 11 },
  { startX: "7%", startY: "72%", size: 21, delay: 1, duration: 14 },
  { startX: "15%", startY: "88%", size: 13, delay: 5, duration: 16 },
  { startX: "18%", startY: "57%", size: 9, delay: 4, duration: 18 },
  { startX: "12%", startY: "31%", size: 12, delay: 8, duration: 17 },

  // Upper area
  { startX: "21%", startY: "10%", size: 14, delay: 4, duration: 15 },
  { startX: "35%", startY: "7%", size: 20, delay: 7, duration: 17 },
  { startX: "48%", startY: "13%", size: 11, delay: 3, duration: 14 },
  { startX: "63%", startY: "8%", size: 17, delay: 6, duration: 16 },
  { startX: "78%", startY: "12%", size: 23, delay: 1, duration: 14 },
  { startX: "44%", startY: "5%", size: 8, delay: 9, duration: 20 },
  { startX: "58%", startY: "17%", size: 13, delay: 5, duration: 18 },

  // Right side
  { startX: "92%", startY: "25%", size: 27, delay: 3, duration: 16 },
  { startX: "86%", startY: "48%", size: 15, delay: 5, duration: 12 },
  { startX: "94%", startY: "67%", size: 21, delay: 2, duration: 15 },
  { startX: "82%", startY: "84%", size: 13, delay: 4, duration: 18 },
  { startX: "89%", startY: "38%", size: 9, delay: 8, duration: 19 },
  { startX: "76%", startY: "91%", size: 11, delay: 6, duration: 17 },

  // Bubbles crossing the invitation card
  { startX: "24%", startY: "76%", size: 17, delay: 1, duration: 17 },
  { startX: "30%", startY: "68%", size: 12, delay: 5, duration: 15 },
  { startX: "42%", startY: "87%", size: 20, delay: 3, duration: 19 },
  { startX: "52%", startY: "78%", size: 14, delay: 6, duration: 16 },
  { startX: "61%", startY: "89%", size: 18, delay: 2, duration: 18 },
  { startX: "69%", startY: "71%", size: 12, delay: 7, duration: 15 },
  { startX: "37%", startY: "82%", size: 9, delay: 4, duration: 20 },
  { startX: "57%", startY: "69%", size: 11, delay: 9, duration: 18 },

  // Smaller background bubbles
  { startX: "18%", startY: "28%", size: 10, delay: 8, duration: 20 },
  { startX: "73%", startY: "34%", size: 11, delay: 4, duration: 18 },
  { startX: "56%", startY: "24%", size: 13, delay: 9, duration: 19 },
  { startX: "38%", startY: "52%", size: 10, delay: 6, duration: 21 },
  { startX: "83%", startY: "61%", size: 8, delay: 11, duration: 19 },
  { startX: "22%", startY: "63%", size: 8, delay: 10, duration: 22 },

  // Extra bubbles around the "SAVE THE DATE" area
  { startX: "27%", startY: "27%", size: 15, delay: 2, duration: 15 },
  { startX: "32%", startY: "34%", size: 10, delay: 7, duration: 18 },
  { startX: "39%", startY: "25%", size: 13, delay: 4, duration: 17 },
  { startX: "47%", startY: "31%", size: 17, delay: 1, duration: 16 },
  { startX: "55%", startY: "27%", size: 11, delay: 6, duration: 19 },
  { startX: "64%", startY: "32%", size: 15, delay: 3, duration: 17 },
  { startX: "70%", startY: "25%", size: 10, delay: 8, duration: 20 },
  { startX: "35%", startY: "29%", size: 8, delay: 10, duration: 21 },
  { startX: "60%", startY: "29%", size: 8, delay: 12, duration: 18 },

  // Small bubbles passing through the title
  { startX: "31%", startY: "41%", size: 11, delay: 5, duration: 18 },
  { startX: "43%", startY: "38%", size: 14, delay: 2, duration: 16 },
  { startX: "57%", startY: "42%", size: 12, delay: 7, duration: 19 },
  { startX: "67%", startY: "39%", size: 10, delay: 4, duration: 17 },
  { startX: "36%", startY: "47%", size: 8, delay: 9, duration: 20 },
  { startX: "62%", startY: "46%", size: 9, delay: 11, duration: 18 },
];

/* =============================================================
   LIGHT PARTICLES
============================================================= */

const particles = Array.from({ length: 20 }, (_, index) => ({
  left: `${5 + ((index * 31) % 90)}%`,
  top: `${5 + ((index * 23) % 88)}%`,
  delay: index * 0.25,
  duration: 3 + (index % 4),
}));

/* =============================================================
   FALLING FLORAL / SNOW-LIKE ELEMENTS
============================================================= */

const fallingElements = [
  {
    left: "5%",
    size: 13,
    delay: 0,
    duration: 12,
    drift: 28,
    rotate: 120,
    opacity: 0.42,
  },
  {
    left: "11%",
    size: 9,
    delay: 3,
    duration: 15,
    drift: -20,
    rotate: 70,
    opacity: 0.34,
  },
  {
    left: "17%",
    size: 11,
    delay: 6,
    duration: 14,
    drift: 32,
    rotate: 180,
    opacity: 0.38,
  },
  {
    left: "23%",
    size: 8,
    delay: 2,
    duration: 11,
    drift: -24,
    rotate: 90,
    opacity: 0.31,
  },
  {
    left: "29%",
    size: 12,
    delay: 8,
    duration: 16,
    drift: 20,
    rotate: 210,
    opacity: 0.4,
  },
  {
    left: "35%",
    size: 9,
    delay: 4,
    duration: 13,
    drift: -28,
    rotate: 145,
    opacity: 0.34,
  },
  {
    left: "41%",
    size: 13,
    delay: 1,
    duration: 15,
    drift: 25,
    rotate: 260,
    opacity: 0.42,
  },
  {
    left: "47%",
    size: 8,
    delay: 7,
    duration: 12,
    drift: -18,
    rotate: 110,
    opacity: 0.3,
  },
  {
    left: "53%",
    size: 11,
    delay: 3,
    duration: 14,
    drift: 26,
    rotate: 190,
    opacity: 0.38,
  },
  {
    left: "59%",
    size: 9,
    delay: 9,
    duration: 17,
    drift: -24,
    rotate: 320,
    opacity: 0.33,
  },
  {
    left: "65%",
    size: 12,
    delay: 5,
    duration: 13,
    drift: 18,
    rotate: 240,
    opacity: 0.39,
  },
  {
    left: "71%",
    size: 8,
    delay: 10,
    duration: 18,
    drift: 30,
    rotate: 80,
    opacity: 0.3,
  },
  {
    left: "77%",
    size: 13,
    delay: 12,
    duration: 16,
    drift: -25,
    rotate: 160,
    opacity: 0.4,
  },
  {
    left: "83%",
    size: 9,
    delay: 4,
    duration: 14,
    drift: 22,
    rotate: 300,
    opacity: 0.34,
  },
  {
    left: "89%",
    size: 11,
    delay: 8,
    duration: 15,
    drift: -30,
    rotate: 135,
    opacity: 0.38,
  },
  {
    left: "95%",
    size: 13,
    delay: 5,
    duration: 13,
    drift: 18,
    rotate: 240,
    opacity: 0.41,
  },
  {
    left: "14%",
    size: 6,
    delay: 11,
    duration: 19,
    drift: 30,
    rotate: 80,
    opacity: 0.25,
  },
  {
    left: "32%",
    size: 7,
    delay: 13,
    duration: 18,
    drift: -25,
    rotate: 160,
    opacity: 0.28,
  },
  {
    left: "56%",
    size: 6,
    delay: 14,
    duration: 17,
    drift: 24,
    rotate: 220,
    opacity: 0.25,
  },
  {
    left: "73%",
    size: 7,
    delay: 15,
    duration: 19,
    drift: -22,
    rotate: 40,
    opacity: 0.27,
  },
];

/* =============================================================
   MAIN COMPONENT
============================================================= */

export default function SaveTheDate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      className="
        fixed
        inset-0
        z-[100]
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#eee8df]
        px-4
        py-5
        sm:px-6
      "
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.035,
        filter: "blur(10px)",
        transition: {
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      {/* =========================================================
          RECEPTION BACKGROUND
      ========================================================= */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="
            h-full
            w-full
            object-cover
            saturate-[0.55]
            brightness-[1.04]
          "
        />
      </motion.div>

      {/* =========================================================
          WARM IVORY COLOR WASH
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[#eee5dc]/65
          mix-blend-color
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            180deg,
            rgba(249,244,237,.50)_0%,
            rgba(238,224,214,.28)_40%,
            rgba(66,53,46,.25)_100%
          )]
        "
      />

      {/* =========================================================
          SOFT PINK AMBIENT LIGHT
      ========================================================= */}

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[20%]
          -top-[20%]
          h-[55vw]
          w-[55vw]
          max-h-[700px]
          max-w-[700px]
          rounded-full
          bg-[#d7b3ae]/40
          blur-[120px]
        "
      />

      {/* =========================================================
          SOFT SAGE AMBIENT LIGHT
      ========================================================= */}

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-[20%]
          -right-[15%]
          h-[55vw]
          w-[55vw]
          max-h-[700px]
          max-w-[700px]
          rounded-full
          bg-[#aeb8a5]/40
          blur-[120px]
        "
      />

      {/* =========================================================
          SUBTLE GOLD LIGHT
      ========================================================= */}

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[15%]
          h-48
          w-48
          rounded-full
          bg-[#d8b27d]/15
          blur-[90px]
        "
      />

      {/* =========================================================
          CINEMATIC LIGHT SWEEP
      ========================================================= */}

      <motion.div
        animate={{
          x: ["-20%", "120%"],
          opacity: [0, 0.16, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-30%]
          top-[-20%]
          z-[5]
          h-[150%]
          w-[18%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          blur-2xl
        "
      />

      {/* =========================================================
          FALLING FLORAL / SNOW-LIKE ATMOSPHERE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[15]
          overflow-hidden
        "
      >
        {fallingElements.map((element, index) => (
          <FallingFloral key={index} {...element} />
        ))}
      </div>

      {/* =========================================================
          PINK FLOATING BUBBLES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[40]
          overflow-hidden
        "
      >
        {bubbles.map((bubble, index) => (
          <FloatingBubble key={index} {...bubble} />
        ))}
      </div>

      {/* =========================================================
          LIGHT PARTICLES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[41]
        "
      >
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="
              absolute
              rounded-full
              bg-white
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: index % 5 === 0 ? 2 : 1,
              height: index % 5 === 0 ? 2 : 1,
            }}
            animate={{
              opacity: [0.03, 0.35, 0.03],
              scale: [0.6, 1.3, 0.6],
              y: [0, -8, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =========================================================
          MAIN INVITATION CARD
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.15,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-30
          mx-auto
          w-full
          max-w-[590px]
          overflow-hidden
          border
          border-[#fffaf4]/80
          bg-[#faf6ef]/90
          px-6
          py-9
          text-center
          shadow-[0_45px_120px_rgba(67,48,39,.25)]
          backdrop-blur-2xl
          sm:px-12
          sm:py-11
        "
      >
        {/* =======================================================
            INNER FRAME
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-3
            border
            border-[#b9916c]/35
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-5
            border
            border-[#a9b0a0]/20
          "
        />

        {/* Corner details */}

        <div className="absolute left-6 top-6 text-[#b68b70]/60">✧</div>

        <div className="absolute right-6 top-6 text-[#b68b70]/60">✧</div>

        <div className="absolute bottom-6 left-6 text-[#b68b70]/60">✧</div>

        <div className="absolute bottom-6 right-6 text-[#b68b70]/60">✧</div>

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.7,
          }}
          className="relative"
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.42em]
              text-[#83736b]
            "
          >
            A new chapter begins
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c9aaa7]" />

            <span className="text-[16px] text-[#b98579]">❀</span>

            <span className="h-px w-9 bg-[#c9aaa7]" />
          </div>
        </motion.div>

        {/* =======================================================
            TITLE
        ======================================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.68,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-display
            relative
            mt-6
            text-[clamp(55px,11vw,100px)]
            leading-[0.8]
            tracking-[-0.065em]
            text-[#39332f]
          "
        >
          Save the
          <br />
          <span className="serif-italic font-light text-[#b87e74]">Date</span>
        </motion.h1>

        {/* =======================================================
            ORNAMENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.85,
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-[#c9aaa7]" />

          <span className="text-[#c08b78]">❧</span>

          <span className="h-px w-12 bg-[#c9aaa7]" />
        </motion.div>

        {/* =======================================================
            COUPLE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="relative mt-6"
        >
          <p
            className="
              font-display
              text-[28px]
              tracking-[-0.02em]
              text-[#39332f]
            "
          >
            Aneena
            <span className="serif-italic mx-2 text-[#bd897c]">&</span>
            Loyed
          </p>

          <p
            className="
              mt-2
              text-[10px]
              uppercase
              tracking-[0.34em]
              text-[#82746c]
            "
          >
            15 November 2026
          </p>
        </motion.div>

        {/* =======================================================
            IMAGE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-8
            aspect-[4/3]
            max-w-[425px]
          "
        >
          {/* Very subtle ambient extension behind the image */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-3
              overflow-hidden
              opacity-20
              blur-xl
              scale-[1.02]
            "
          >
            <img
              src="/images/save-date.jpeg"
              alt=""
              aria-hidden="true"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* Photograph */}
          <div className="relative h-full w-full overflow-hidden">
            <motion.img
              src="/images/save-date.jpeg"
              alt="Wedding table setting"
              animate={{
                scale: [1, 1.018, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-full
                object-cover
              "
            />

            {/* Extremely soft blending at the edges */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(
                  ellipse_at_center,
                  transparent 68%,
                  rgba(250,246,239,0.08) 82%,
                  rgba(250,246,239,0.28) 100%
                )]
              "
            />

            {/* Gentle fade where image meets the card */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-[10%]
                bg-gradient-to-t
                from-[#faf6ef]/10
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-[7%]
                bg-gradient-to-b
                from-[#faf6ef]/20
                to-transparent
              "
            />

            {/* Subtle inner photograph frame */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[9px]
                border
                border-white/45
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-[13px]
                border
                border-[#ead8cf]/35
              "
            />

            {/* Quiet corner accents matching the invitation frame */}
            <div className="pointer-events-none absolute left-[9px] top-[9px] h-5 w-5 border-l border-t border-white/60" />
            <div className="pointer-events-none absolute right-[9px] top-[9px] h-5 w-5 border-r border-t border-white/60" />
            <div className="pointer-events-none absolute bottom-[9px] left-[9px] h-5 w-5 border-b border-l border-white/60" />
            <div className="pointer-events-none absolute bottom-[9px] right-[9px] h-5 w-5 border-b border-r border-white/60" />
          </div>
        </motion.div>

        {/* =======================================================
            OPEN INVITATION
        ======================================================= */}

        <motion.button
          onClick={onOpen}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.18,
            duration: 0.7,
          }}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
    group
    relative
    mt-7
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    border
    border-[#b88f88]/55
    bg-[#c79a92]
    px-5
    py-[11px]
    text-[8px]
    uppercase
    tracking-[0.24em]
    text-white
    shadow-[0_7px_22px_rgba(130,89,80,.10)]
    transition-all
    duration-500
    hover:bg-[#bd8d85]
    hover:border-[#aa7d75]/65
  "
        >
          <span className="relative z-10">Open invitation</span>

          <ArrowUpRight
            size={12}
            strokeWidth={1.4}
            className="
      relative
      z-10
      transition-all
      duration-500
      group-hover:-translate-y-0.5
      group-hover:translate-x-0.5
      group-hover:rotate-45
    "
          />

          {/* Very subtle satin-like light sweep */}
          <span
            className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-white/[0.12]
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
          />
        </motion.button>

        {/* =======================================================
            FOOTER ORNAMENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="mt-7"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#d0c0b5]" />

            <span className="text-[17px] text-[#b88676]">❀</span>

            <span className="h-px w-8 bg-[#d0c0b5]" />
          </div>

          <p
            className="
              mt-3
              text-[8px]
              uppercase
              tracking-[0.32em]
              text-[#94847b]
            "
          >
            We can't wait to celebrate with you
          </p>
        </motion.div>
      </motion.div>

      {/* =========================================================
          GRAIN
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[60]
          opacity-[0.035]
        "
      >
        <svg className="h-full w-full">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </motion.section>
  );
}

/* =============================================================
   FALLING FLORAL / SNOW-LIKE ELEMENT
============================================================= */

function FallingFloral({
  left,
  size,
  delay,
  duration,
  drift,
  rotate,
  opacity,
}: {
  left: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotate: number;
  opacity: number;
}) {
  return (
    <motion.span
      className="
        absolute
        top-[-24px]
        block
      "
      style={{
        left,
        width: size,
        height: size,
      }}
      animate={{
        y: ["0vh", "112vh"],
        x: [0, drift, drift * -0.45, drift * 0.65, 0],
        rotate: [rotate, rotate + 80, rotate + 170, rotate + 260, rotate + 360],
        opacity: [0, opacity, opacity * 0.7, opacity, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[1px]
          -translate-x-1/2
          bg-[#f7dce2]/70
        "
      />

      <span
        className="
          absolute
          left-0
          top-1/2
          h-[1px]
          w-full
          -translate-y-1/2
          bg-[#f7dce2]/70
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[1px]
          w-full
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-[#f7dce2]/55
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[1px]
          w-full
          -translate-x-1/2
          -translate-y-1/2
          -rotate-45
          bg-[#f7dce2]/55
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[22%]
          w-[22%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#efc1cc]/70
        "
      />
    </motion.span>
  );
}

/* =============================================================
   PINK TRANSLUCENT GLASS BUBBLE
============================================================= */

function FloatingBubble({
  startX,
  startY,
  size,
  delay,
  duration,
}: {
  startX: string;
  startY: string;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.span
      className="
        absolute
        overflow-hidden
        rounded-full
        border
        border-[#f6c5d2]/75
        bg-[#e9aebe]/[0.22]
        shadow-[0_0_22px_rgba(225,157,178,0.28)]
        backdrop-blur-[1px]
        mix-blend-screen
      "
      style={{
        left: startX,
        top: startY,
        width: size,
        height: size,
      }}
      animate={{
        x: [0, 18, 42, 24, 0],
        y: [0, -28, -58, -22, 0],
        scale: [1, 1.12, 0.94, 1.08, 1],
        opacity: [0.42, 0.78, 0.52, 0.72, 0.42],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span
        className="
          absolute
          inset-[12%]
          rounded-full
          bg-[#efb7c7]/[0.14]
          blur-[2px]
        "
      />

      <span
        className="
          absolute
          left-[17%]
          top-[14%]
          h-[25%]
          w-[25%]
          rounded-full
          bg-white/80
          blur-[1px]
        "
      />

      <span
        className="
          absolute
          bottom-[16%]
          right-[15%]
          h-[17%]
          w-[17%]
          rounded-full
          bg-[#f4b9ca]/70
          blur-[1px]
        "
      />

      <span
        className="
          absolute
          inset-[18%]
          rounded-full
          border
          border-[#ffdce5]/35
        "
      />
    </motion.span>
  );
}
