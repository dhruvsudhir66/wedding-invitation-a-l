"use client";

import { motion } from "framer-motion";
import { ArrowDown, CalendarDays } from "lucide-react";

const bokehLights = [
  {
    left: "6%",
    top: "16%",
    size: 110,
    delay: 0,
    duration: 10,
    opacity: 0.16,
  },
  {
    left: "17%",
    top: "60%",
    size: 65,
    delay: 2,
    duration: 12,
    opacity: 0.13,
  },
  {
    left: "79%",
    top: "14%",
    size: 95,
    delay: 4,
    duration: 11,
    opacity: 0.15,
  },
  {
    left: "91%",
    top: "52%",
    size: 125,
    delay: 1,
    duration: 14,
    opacity: 0.13,
  },
  {
    left: "72%",
    top: "70%",
    size: 58,
    delay: 6,
    duration: 9,
    opacity: 0.16,
  },
  {
    left: "28%",
    top: "25%",
    size: 45,
    delay: 3,
    duration: 13,
    opacity: 0.12,
  },
  {
    left: "47%",
    top: "10%",
    size: 38,
    delay: 5,
    duration: 12,
    opacity: 0.11,
  },
];

const particles = Array.from({ length: 42 }, (_, index) => ({
  left: `${3 + ((index * 29) % 94)}%`,
  top: `${4 + ((index * 37) % 90)}%`,
  delay: index * 0.18,
  duration: 4 + (index % 5),
  size: index % 7 === 0 ? 5 : index % 3 === 0 ? 3.5 : 2.5,
  opacity: index % 7 === 0 ? 0.55 : index % 3 === 0 ? 0.4 : 0.28,
}));

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[92vh]
        items-end
        overflow-hidden
        bg-[#e5ded6]
      "
    >
      {/* =========================================================
          HERO IMAGE
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
            blur-[1px]
            scale-[1.01]
          "
        />

        {/* Existing cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(
              180deg,
              rgba(35,30,27,.05)_10%,
              rgba(35,30,27,.08)_45%,
              rgba(35,30,27,.68)_100%
            )]
          "
        />

        {/* =======================================================
            FACIAL DIFFUSION
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            backdrop-blur-[4px]
            [mask-image:radial-gradient(
              ellipse_15%_14%_at_52%_43%,
              black_0%,
              rgba(0,0,0,0.9)_35%,
              rgba(0,0,0,0.45)_62%,
              transparent_100%
            )]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            backdrop-blur-[2px]
            [mask-image:radial-gradient(
              ellipse_24%_20%_at_54%_46%,
              rgba(0,0,0,0.32)_0%,
              rgba(0,0,0,0.18)_45%,
              transparent_100%
            )]
          "
        />

        {/* =======================================================
            WARM ATMOSPHERIC GLOW AROUND THE COUPLE
        ======================================================= */}

        <motion.div
          animate={{
            opacity: [0.18, 0.32, 0.2, 0.28, 0.18],
            scale: [1, 1.08, 0.98, 1.06, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[42%]
            top-[34%]
            h-[30vw]
            w-[30vw]
            max-h-[520px]
            max-w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#f4d7b5]/[0.18]
            blur-[105px]
          "
        />

        {/* Smaller champagne glow */}
        <motion.div
          animate={{
            opacity: [0.12, 0.24, 0.12],
            x: [0, 12, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[48%]
            top-[39%]
            h-40
            w-40
            rounded-full
            bg-[#fff0d5]/[0.22]
            blur-[65px]
          "
        />

        {/* =======================================================
            FLOATING BOKEH LIGHTS
        ======================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {bokehLights.map((light, index) => (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-white
                blur-2xl
              "
              style={{
                left: light.left,
                top: light.top,
                width: light.size,
                height: light.size,
              }}
              animate={{
                x: [0, 18, -12, 0],
                y: [0, -18, 10, 0],
                scale: [1, 1.16, 0.9, 1],
                opacity: [
                  light.opacity * 0.55,
                  light.opacity,
                  light.opacity * 0.7,
                  light.opacity * 0.55,
                ],
              }}
              transition={{
                duration: light.duration,
                delay: light.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* =======================================================
            SMALLER FOREGROUND LIGHT ORBS
        ======================================================= */}

        <motion.div
          animate={{
            x: ["-10%", "15%", "-5%"],
            y: ["5%", "-4%", "5%"],
            opacity: [0.08, 0.2, 0.08],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-[30%]
            h-20
            w-20
            rounded-full
            bg-[#fff1d8]/20
            blur-2xl
          "
        />

        <motion.div
          animate={{
            x: ["5%", "-12%", "5%"],
            y: [0, 12, 0],
            opacity: [0.06, 0.17, 0.06],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[9%]
            top-[38%]
            h-28
            w-28
            rounded-full
            bg-[#f8dfbc]/20
            blur-3xl
          "
        />

        {/* =======================================================
            CINEMATIC LIGHT SWEEP
        ======================================================= */}

        <motion.div
          animate={{
            x: ["-120%", "130%"],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[-35%]
            top-[-30%]
            h-[165%]
            w-[24%]
            rotate-[16deg]
            bg-gradient-to-r
            from-transparent
            via-[#fff8eb]/45
            to-transparent
            blur-3xl
          "
        />

        {/* =======================================================
            SECOND VERY WIDE LIGHT LEAK
        ======================================================= */}

        <motion.div
          animate={{
            x: ["-70%", "100%"],
            opacity: [0, 0.08, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[-40%]
            top-[-15%]
            h-[130%]
            w-[42%]
            rotate-[12deg]
            bg-gradient-to-r
            from-transparent
            via-[#e8c99f]/35
            to-transparent
            blur-[70px]
          "
        />

        {/* =======================================================
            SUBTLE LENS FLARE
        ======================================================= */}

        <motion.div
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[57%]
            top-[20%]
            h-16
            w-16
            rounded-full
            bg-[#fff1c9]/25
            blur-xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[57.5%]
            top-[21%]
            h-px
            w-32
            rotate-[12deg]
            bg-gradient-to-r
            from-transparent
            via-[#fff4d5]/35
            to-transparent
            blur-[1px]
          "
        />

        {/* =======================================================
            FLOATING DUST / PARTICLES
        ======================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="
        absolute
        rounded-full
        bg-white
        shadow-[0_0_10px_rgba(255,244,225,0.45)]
      "
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0, particle.opacity, particle.opacity * 0.65, 0],
                y: [0, -18, -34],
                x: [0, index % 2 === 0 ? 7 : -7, index % 2 === 0 ? -3 : 3],
                scale: [0.65, 1.25, 0.8],
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

        {/* =======================================================
            SOFT EDGE VIGNETTE
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent_38%,
              rgba(35,30,27,.07)_62%,
              rgba(35,30,27,.30)_100%
            )]
          "
        />

        {/* =======================================================
            BOTTOM ATMOSPHERIC FADE
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[52%]
            bg-gradient-to-t
            from-[#211b18]/45
            via-[#211b18]/12
            to-transparent
          "
        />

        {/* =======================================================
            SUBTLE FILM GRAIN
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
          "
        >
          <svg className="h-full w-full">
            <filter id="hero-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect width="100%" height="100%" filter="url(#hero-grain)" />
          </svg>
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="container-wedding relative z-10 pb-16 pt-36 text-white md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow-white text-white"
        >
          With joyful hearts, we invite you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.12,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-display
            mt-5
            max-w-5xl
            text-[clamp(70px,13vw,170px)]
            leading-[.78]
            tracking-[-.065em]
          "
        >
          Aneena
          <span className="serif-italic font-light"> & </span>
          Loyed
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-wrap items-center gap-5 text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={15} />
            Sunday, 15 November 2026
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/60 md:block" />
        </motion.div>

        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="
            mt-14
            inline-flex
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[.25em]
            text-white/80
          "
        >
          Discover our story
          <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}
