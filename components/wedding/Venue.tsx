"use client";

import { ArrowUpRight, Church, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const events = [
  {
    number: "01",
    type: "Bethrothal",
    time: "4:00 PM",
    place: "St Francis Assisi Church",
    description:
      "We begin the celebration with our betrothal, surrounded by our families and the people we love.",
    mapsUrl: "https://maps.app.goo.gl/owMGgWLTWnmmyMat9",
  },
  {
    number: "02",
    type: "Reception",
    time: "6:00 PM Onwards",
    place: "Infant Jesus Church Parish hall",
    description:
      "An evening of dinner, conversation, music, dancing, and celebrating together.",
    mapsUrl: "https://maps.app.goo.gl/FU5VgkeMbASUa4qz9",
  },
];

/*
  Add, remove, or change colours here.
  The colour section below will automatically adapt.
*/
const bethrothalColors = ["#F8EBE6", "#C890A7"];

const particles = Array.from({ length: 20 }, (_, index) => ({
  left: `${4 + ((index * 29) % 92)}%`,
  top: `${5 + ((index * 41) % 88)}%`,
  delay: index * 0.28,
  duration: 5 + (index % 5),
  size: index % 6 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  opacity: index % 6 === 0 ? 0.28 : index % 3 === 0 ? 0.2 : 0.14,
}));

export default function Venue() {
  return (
    <section
      id="venue"
      className="
        relative
        overflow-hidden
        bg-[#f8ebe6]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =======================================================
          BACKGROUND ATMOSPHERE
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Central blush */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[16%]
            h-[460px]
            w-[460px]
            -translate-x-1/2
            rounded-full
            bg-[#C890A7]/[0.11]
            blur-[125px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.65, 0.95, 0.65],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left blush */}

        <motion.div
          className="
            absolute
            -left-40
            top-[40%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#C890A7]/[0.075]
            blur-[110px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right blush */}

        <motion.div
          className="
            absolute
            -right-40
            top-[55%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#C890A7]/[0.065]
            blur-[120px]
          "
          animate={{
            x: [0, -22, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top wash */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-52
            bg-gradient-to-b
            from-white/[0.20]
            to-transparent
          "
        />

        {/* Bottom wash */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-64
            bg-gradient-to-t
            from-[#eadbd6]/[0.24]
            to-transparent
          "
        />

        {/* ===================================================
            PAPER TEXTURE
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.038]
            [background-image:radial-gradient(
              rgba(105,22,56,0.8)_0.5px,
              transparent_0.5px
            )]
            [background-size:4px_4px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:repeating-linear-gradient(
              0deg,
              rgba(105,22,56,0.55)_0px,
              rgba(105,22,56,0.55)_1px,
              transparent_1px,
              transparent_6px
            )]
          "
        />

        {/* ===================================================
            LARGE ROMANTIC ORNAMENTAL FRAME
        =================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[3%]
            h-[78%]
            w-[86%]
            -translate-x-1/2
            rounded-[50%_50%_12%_12%]
            border
            border-[#691638]/[0.035]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[4.5%]
            h-[75%]
            w-[82%]
            -translate-x-1/2
            rounded-[50%_50%_10%_10%]
            border
            border-[#C890A7]/[0.04]
          "
        />

        {/* ===================================================
            INTERTWINED HEART / LOVE SYMBOL
        =================================================== */}

        <svg
          className="
            absolute
            left-1/2
            top-[5%]
            h-[520px]
            w-[760px]
            -translate-x-1/2
            opacity-[0.065]
            sm:h-[600px]
            sm:w-[900px]
          "
          viewBox="0 0 900 620"
          fill="none"
          aria-hidden="true"
        >
          {/* Main heart */}

          <motion.path
            d="
              M450 525
              C340 430 155 355 155 190
              C155 95 260 55 335 105
              C385 138 420 190 450 225
              C480 190 515 138 565 105
              C640 55 745 95 745 190
              C745 355 560 430 450 525
            "
            stroke="#691638"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeDasharray="3 8"
            animate={{
              pathLength: [0.72, 1, 0.72],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary heart */}

          <motion.path
            d="
              M450 495
              C365 415 190 340 190 210
              C190 135 270 92 330 130
              C380 162 420 216 450 252
              C480 216 520 162 570 130
              C630 92 710 135 710 210
              C710 340 535 415 450 495
            "
            stroke="#C890A7"
            strokeWidth="0.9"
            strokeLinecap="round"
            animate={{
              pathLength: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small center diamond */}

          <motion.path
            d="M450 215 L462 227 L450 239 L438 227 Z"
            stroke="#691638"
            strokeWidth="0.8"
            animate={{
              rotate: [0, 45, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "450px 227px",
            }}
          />
        </svg>

        {/* ===================================================
            LEFT ROMANTIC ORNAMENT
        =================================================== */}

        <svg
          className="
            absolute
            -left-[70px]
            top-[22%]
            h-[360px]
            w-[360px]
            opacity-[0.055]
          "
          viewBox="0 0 360 360"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="180"
            cy="180"
            r="135"
            stroke="#691638"
            strokeWidth="0.8"
            strokeDasharray="2 8"
          />

          <circle
            cx="180"
            cy="180"
            r="108"
            stroke="#C890A7"
            strokeWidth="0.7"
            strokeDasharray="1 6"
          />

          <circle
            cx="180"
            cy="180"
            r="80"
            stroke="#691638"
            strokeWidth="0.55"
            strokeDasharray="2 9"
          />

          <path
            d="
              M180 50
              C220 95 255 120 300 140
              C255 160 220 195 180 310
            "
            stroke="#C890A7"
            strokeWidth="0.7"
          />

          <path
            d="
              M180 50
              C140 95 105 120 60 140
              C105 160 140 195 180 310
            "
            stroke="#C890A7"
            strokeWidth="0.7"
          />
        </svg>

        {/* ===================================================
            RIGHT ROMANTIC ORNAMENT
        =================================================== */}

        <svg
          className="
            absolute
            -right-[80px]
            top-[30%]
            h-[390px]
            w-[390px]
            opacity-[0.05]
          "
          viewBox="0 0 390 390"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="195"
            cy="195"
            r="150"
            stroke="#691638"
            strokeWidth="0.8"
            strokeDasharray="2 8"
          />

          <circle
            cx="195"
            cy="195"
            r="120"
            stroke="#C890A7"
            strokeWidth="0.7"
            strokeDasharray="1 7"
          />

          <circle
            cx="195"
            cy="195"
            r="88"
            stroke="#691638"
            strokeWidth="0.55"
            strokeDasharray="2 9"
          />

          <path
            d="
              M195 45
              C240 105 285 135 345 155
              C285 175 240 220 195 345
            "
            stroke="#C890A7"
            strokeWidth="0.7"
          />

          <path
            d="
              M195 45
              C150 105 105 135 45 155
              C105 175 150 220 195 345
            "
            stroke="#C890A7"
            strokeWidth="0.7"
          />
        </svg>

        {/* ===================================================
            FLOWING RIBBON LINES
        =================================================== */}

        <svg
          className="
            absolute
            left-[-80px]
            top-[47%]
            h-[240px]
            w-[500px]
            opacity-[0.045]
          "
          viewBox="0 0 500 240"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="
              M-20 190
              C70 100 135 100 205 145
              C280 193 345 180 520 35
            "
            stroke="#691638"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="3 9"
            animate={{
              pathLength: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <path
            d="
              M-20 210
              C70 120 140 115 210 160
              C290 210 360 195 520 55
            "
            stroke="#C890A7"
            strokeWidth="0.7"
            strokeLinecap="round"
          />

          <path
            d="
              M-20 225
              C80 140 145 135 215 175
              C300 225 375 205 520 75
            "
            stroke="#691638"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeDasharray="1 7"
          />
        </svg>

        {/* ===================================================
            SMALL CONSTELLATION
        =================================================== */}

        <div
          className="
            absolute
            right-[10%]
            top-[17%]
            h-28
            w-28
            opacity-[0.10]
          "
        >
          <span className="absolute left-3 top-10 h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
          <span className="absolute left-12 top-2 h-1 w-1 rounded-full bg-[#691638]" />
          <span className="absolute right-2 top-14 h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
          <span className="absolute left-16 bottom-4 h-1 w-1 rounded-full bg-[#691638]" />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M12 42 C35 22 58 18 88 52"
              stroke="#691638"
              strokeWidth="0.6"
              strokeDasharray="1 5"
            />

            <path
              d="M45 10 C50 34 66 55 80 76"
              stroke="#C890A7"
              strokeWidth="0.6"
              strokeDasharray="1 5"
            />
          </svg>
        </div>

        {/* ===================================================
            SPARKLES
        =================================================== */}

        <Sparkle className="left-[12%] top-[20%]" delay={0} />

        <Sparkle className="right-[15%] top-[46%]" delay={1.8} small />

        <Sparkle className="left-[18%] bottom-[18%]" delay={3.2} small />

        <Sparkle className="right-[10%] bottom-[12%]" delay={4.5} />

        {/* ===================================================
            FLOATING PARTICLES
        =================================================== */}

        <div className="absolute inset-0">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-[#C890A7]
                shadow-[0_0_10px_rgba(200,144,167,0.18)]
              "
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0, particle.opacity, particle.opacity * 0.65, 0],
                y: [0, -12, -25],
                x: [0, index % 2 === 0 ? 5 : -5, index % 2 === 0 ? -2 : 2],
                scale: [0.7, 1.1, 0.8],
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

        {/* ===================================================
            CINEMATIC LIGHT SWEEP
        =================================================== */}

        <motion.div
          className="
            absolute
            -left-[30%]
            top-[-20%]
            h-[150%]
            w-[18%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.06]
            to-transparent
            blur-2xl
          "
          animate={{
            x: ["0%", "760%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =======================================================
          CONTENT
      ======================================================= */}

      <div className="container-wedding relative z-10">
        {/* =======================================================
            INTRO
        ======================================================= */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#691638]/50
              "
            >
              The celebration
            </p>

            <h2
              className="
                mt-4
                font-display
                text-4xl
                leading-[0.95]
                tracking-[-0.04em]
                text-[#691638]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Two moments.
              <br />
              <span className="serif-italic font-light">One celebration.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#691638]/55
                sm:text-[15px]
              "
            >
              From the quiet beauty of the church to an evening of celebration,
              we would love to have you with us.
            </p>
          </div>
        </Reveal>

        {/* =======================================================
            CHURCH IMAGE
        ======================================================= */}

        <Reveal className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative mx-auto w-full max-w-4xl">
            {/* Ambient glow */}

            <motion.div
              className="
                pointer-events-none
                absolute
                -inset-5
                rounded-full
                bg-[#C890A7]/[0.09]
                blur-[50px]
              "
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.65, 0.9, 0.65],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                left-1/2
                h-28
                w-[70%]
                -translate-x-1/2
                rounded-full
                bg-[#691638]/[0.05]
                blur-[45px]
              "
            />

            <div
              className="
                relative
                mx-auto
                aspect-[4/3]
                w-full
                max-w-[720px]
                overflow-hidden
                rounded-[50%_50%_3%_3%]
                border
                border-[#691638]/10
                bg-[#eadbd6]
                shadow-[0_25px_70px_rgba(105,22,56,0.08)]
              "
            >
              <motion.img
                src="/images/church-thuruthipuram.webp"
                alt="Church where the celebration begins"
                animate={{
                  scale: [1.015, 1.025, 1.015],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image vignette */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(
                    ellipse_at_center,
                    transparent_42%,
                    rgba(105,22,56,0.055)_78%,
                    rgba(105,22,56,0.11)_100%
                  )]
                "
              />

              {/* Top light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-28
                  bg-gradient-to-b
                  from-white/[0.16]
                  to-transparent
                "
              />

              {/* Image sweep */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  -left-[30%]
                  top-[-20%]
                  h-[150%]
                  w-[25%]
                  rotate-[15deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.10]
                  to-transparent
                  blur-xl
                "
                animate={{
                  x: ["0%", "570%"],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "easeInOut",
                }}
              />

              {/* Image grain */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.045]
                  [background-image:radial-gradient(
                    rgba(255,255,255,0.9)_0.5px,
                    transparent_0.5px
                  )]
                  [background-size:4px_4px]
                "
              />

              {/* Film texture */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.025]
                  [background-image:repeating-linear-gradient(
                    0deg,
                    rgba(255,255,255,0.8)_0px,
                    rgba(255,255,255,0.8)_1px,
                    transparent_1px,
                    transparent_5px
                  )]
                "
              />

              {/* Inner frames */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[10px]
                  border
                  border-white/30
                  sm:inset-[14px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[15px]
                  border
                  border-white/15
                  sm:inset-[20px]
                "
              />

              {/* Corners */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[10px]
                  top-[10px]
                  h-6
                  w-6
                  border-l
                  border-t
                  border-white/42
                  sm:left-[14px]
                  sm:top-[14px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[10px]
                  top-[10px]
                  h-6
                  w-6
                  border-r
                  border-t
                  border-white/42
                  sm:right-[14px]
                  sm:top-[14px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[10px]
                  left-[10px]
                  h-6
                  w-6
                  border-b
                  border-l
                  border-white/42
                  sm:bottom-[14px]
                  sm:left-[14px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[10px]
                  right-[10px]
                  h-6
                  w-6
                  border-b
                  border-r
                  border-white/42
                  sm:bottom-[14px]
                  sm:right-[14px]
                "
              />
            </div>

            {/* Church label */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                absolute
                bottom-5
                left-5
                z-10
                border
                border-white/35
                bg-[#691638]/75
                px-4
                py-3
                shadow-[0_10px_30px_rgba(105,22,56,0.12)]
                backdrop-blur-md
                sm:bottom-8
                sm:left-8
              "
            >
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-white/55
                "
              >
                Where it begins
              </p>

              <p
                className="
                  mt-1
                  font-display
                  text-lg
                  text-white
                  sm:text-xl
                "
              >
                The Church
              </p>
            </motion.div>

            {/* Location */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                absolute
                -bottom-4
                right-4
                z-10
                flex
                items-center
                gap-2
                border
                border-[#691638]/10
                bg-[#f8ebe6]/90
                px-4
                py-3
                shadow-[0_12px_30px_rgba(105,22,56,0.08)]
                backdrop-blur-md
                sm:-bottom-5
                sm:right-8
              "
            >
              <MapPin size={13} strokeWidth={1.4} className="text-[#C890A7]" />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-[#691638]/65
                "
              >
                Thuruthipuram
              </span>
            </motion.div>
          </div>
        </Reveal>

        {/* =======================================================
            EVENT TIMELINE
        ======================================================= */}

        <Reveal className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Mobile / tablet */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[13px]
                top-0
                w-px
                bg-[#691638]/[0.07]
                lg:hidden
              "
            />

            <div
              className="
                space-y-6
                sm:space-y-8
                lg:hidden
              "
            >
              {events.map((event) => (
                <motion.div
                  key={event.number}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  className="
                    relative
                    pl-10
                  "
                >
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                    "
                  >
                    <motion.span
                      className="
                        absolute
                        h-7
                        w-7
                        rotate-45
                        border
                        border-[#C890A7]/30
                        bg-[#f8ebe6]
                      "
                      whileInView={{
                        rotate: [45, 90, 45],
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.9,
                      }}
                    />

                    <span
                      className="
                        relative
                        h-1.5
                        w-1.5
                        rotate-45
                        bg-[#C890A7]
                      "
                    />
                  </div>

                  <EventContent event={event} />
                </motion.div>
              ))}
            </div>

            {/* Desktop */}

            <div
              className="
                relative
                hidden
                lg:block
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2
                  top-0
                  w-px
                  -translate-x-1/2
                  bg-[#691638]/[0.07]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#C890A7]/[0.06]
                  blur-[50px]
                "
              />

              <div className="space-y-10 xl:space-y-12">
                {events.map((event, index) => (
                  <motion.div
                    key={event.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    className="
                      relative
                      grid
                      min-h-[190px]
                      grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]
                      items-center
                    "
                  >
                    {/* Left */}

                    <div className="min-w-0 pr-10 xl:pr-16">
                      {index % 2 === 0 && (
                        <div className="ml-auto max-w-[390px] text-right">
                          <EventContent event={event} align="right" />
                        </div>
                      )}
                    </div>

                    {/* Center */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        justify-self-center
                      "
                    >
                      <motion.span
                        className="
                          absolute
                          h-8
                          w-8
                          rotate-45
                          border
                          border-[#C890A7]/30
                          bg-[#f8ebe6]
                        "
                        whileInView={{
                          rotate: [45, 90, 45],
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                        }}
                      />

                      <span
                        className="
                          relative
                          h-1.5
                          w-1.5
                          rotate-45
                          bg-[#C890A7]
                        "
                      />
                    </div>

                    {/* Right */}

                    <div className="min-w-0 pl-10 xl:pl-16">
                      {index % 2 !== 0 && (
                        <div className="max-w-[390px]">
                          <EventContent event={event} align="left" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* =======================================================
            SEPARATOR
        ======================================================= */}

        <Reveal className="mt-7 sm:mt-9 lg:mt-10">
          <div className="relative flex flex-col items-center">
            <div className="flex w-full items-center justify-center">
              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "7rem",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  h-px
                  max-w-[7rem]
                  bg-[#691638]/[0.07]
                "
              />

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  mx-4
                  h-2
                  w-2
                  rotate-45
                  border
                  border-[#C890A7]/30
                  bg-[#f8ebe6]
                  sm:mx-6
                "
              />

              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "7rem",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  h-px
                  max-w-[7rem]
                  bg-[#691638]/[0.07]
                "
              />
            </div>

            <div className="mt-3 h-px w-5 bg-[#C890A7]/22" />
          </div>
        </Reveal>

        {/* =======================================================
            BETHROTHAL COLOUR THEME
        ======================================================= */}

        <Reveal className="mt-4 sm:mt-6 lg:mt-7">
          <section
            className="
              relative
              overflow-hidden
              rounded-[2px]
              bg-[#F3E7E3]
              px-5
              py-10
              sm:px-8
              sm:py-12
              lg:px-12
              lg:py-14
            "
          >
            {/* Blend top */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-16
                bg-gradient-to-b
                from-[#f8ebe6]
                to-transparent
                opacity-70
              "
            />

            {/* Blend bottom */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-16
                bg-gradient-to-t
                from-[#f8ebe6]
                to-transparent
                opacity-50
              "
            />

            {/* Ambient glow */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-48
                w-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#C890A7]/[0.08]
                blur-[80px]
              "
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                VISIBLE ROMANTIC PATTERN
            ================================================= */}

            <svg
              className="
                pointer-events-none
                absolute
                -left-[95px]
                -top-[85px]
                h-[310px]
                w-[310px]
                opacity-[0.055]
              "
              viewBox="0 0 310 310"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="155"
                cy="155"
                r="128"
                stroke="#691638"
                strokeWidth="0.9"
                strokeDasharray="2 7"
              />

              <circle
                cx="155"
                cy="155"
                r="103"
                stroke="#C890A7"
                strokeWidth="0.8"
                strokeDasharray="1 6"
              />

              <circle
                cx="155"
                cy="155"
                r="77"
                stroke="#691638"
                strokeWidth="0.6"
                strokeDasharray="2 8"
              />

              <circle
                cx="155"
                cy="155"
                r="49"
                stroke="#C890A7"
                strokeWidth="0.6"
              />

              <path
                d="
                  M155 27
                  C205 80 244 105 285 125
                  C245 155 205 185 155 283
                "
                stroke="#691638"
                strokeWidth="0.7"
              />

              <path
                d="
                  M155 27
                  C105 80 66 105 25 125
                  C65 155 105 185 155 283
                "
                stroke="#691638"
                strokeWidth="0.7"
              />

              <path
                d="
                  M155 78
                  C180 105 201 120 225 135
                  C201 151 180 170 155 232
                "
                stroke="#C890A7"
                strokeWidth="0.7"
                strokeDasharray="2 5"
              />

              <path
                d="
                  M155 78
                  C130 105 109 120 85 135
                  C109 151 130 170 155 232
                "
                stroke="#C890A7"
                strokeWidth="0.7"
                strokeDasharray="2 5"
              />
            </svg>

            {/* Right ornament */}

            <svg
              className="
                pointer-events-none
                absolute
                -bottom-[100px]
                -right-[100px]
                h-[330px]
                w-[330px]
                opacity-[0.045]
              "
              viewBox="0 0 330 330"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="165"
                cy="165"
                r="135"
                stroke="#691638"
                strokeWidth="0.8"
                strokeDasharray="2 8"
              />

              <circle
                cx="165"
                cy="165"
                r="108"
                stroke="#C890A7"
                strokeWidth="0.7"
                strokeDasharray="1 7"
              />

              <circle
                cx="165"
                cy="165"
                r="79"
                stroke="#691638"
                strokeWidth="0.6"
                strokeDasharray="2 8"
              />

              <path
                d="
                  M165 30
                  C210 82 250 112 305 138
                  C250 165 210 202 165 300
                "
                stroke="#C890A7"
                strokeWidth="0.8"
              />

              <path
                d="
                  M165 30
                  C120 82 80 112 25 138
                  C80 165 120 202 165 300
                "
                stroke="#C890A7"
                strokeWidth="0.8"
              />
            </svg>

            {/* Small heart contour */}

            <svg
              className="
                pointer-events-none
                absolute
                right-[7%]
                top-[8%]
                h-[130px]
                w-[130px]
                opacity-[0.04]
              "
              viewBox="0 0 130 130"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="
                  M65 108
                  C42 88 15 70 15 43
                  C15 23 37 12 53 23
                  C60 28 64 35 65 40
                  C66 35 70 28 77 23
                  C93 12 115 23 115 43
                  C115 70 88 88 65 108
                "
                stroke="#691638"
                strokeWidth="0.9"
                strokeDasharray="2 6"
              />
            </svg>

            {/* Small dot constellation */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[12%]
                left-[10%]
                h-20
                w-20
                opacity-[0.09]
              "
            >
              <span className="absolute left-1 top-8 h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
              <span className="absolute left-9 top-2 h-1 w-1 rounded-full bg-[#691638]" />
              <span className="absolute right-1 top-12 h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
              <span className="absolute left-12 bottom-1 h-1 w-1 rounded-full bg-[#691638]" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M8 38 C25 20 45 17 72 45"
                  stroke="#691638"
                  strokeWidth="0.6"
                  strokeDasharray="1 5"
                />

                <path
                  d="M37 8 C42 28 54 45 65 65"
                  stroke="#C890A7"
                  strokeWidth="0.6"
                  strokeDasharray="1 5"
                />
              </svg>
            </div>

            {/* =================================================
                PAPER TEXTURE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.035]
                [background-image:radial-gradient(
                  rgba(105,22,56,0.8)_0.5px,
                  transparent_0.5px
                )]
                [background-size:5px_5px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.018]
                [background-image:repeating-linear-gradient(
                  90deg,
                  rgba(105,22,56,0.7)_0px,
                  rgba(105,22,56,0.7)_1px,
                  transparent_1px,
                  transparent_9px
                )]
              "
            />

            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                mx-auto
                max-w-3xl
                text-center
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#691638]/50
                "
              >
                The colour story
              </p>

              <h3
                className="
                  mt-3
                  font-display
                  text-3xl
                  leading-tight
                  tracking-[-0.03em]
                  text-[#691638]
                  sm:text-4xl
                "
              >
                Colours for our{" "}
                <span className="serif-italic font-light">celebration.</span>
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-xs
                  leading-6
                  text-[#691638]/55
                  sm:text-sm
                "
              >
                A soft palette chosen for our Bethrothal.
              </p>

              {/* Colour circles */}

              <div
                className="
                  relative
                  mt-7
                  flex
                  flex-wrap
                  items-start
                  justify-center
                  gap-x-5
                  gap-y-5
                  sm:gap-x-7
                "
              >
                {bethrothalColors.map((color, index) => (
                  <motion.div
                    key={`${color}-${index}`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >
                    {/* Aura */}

                    <motion.div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-14
                        w-14
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#C890A7]/10
                        blur-xl
                      "
                      animate={{
                        scale: [0.9, 1.15, 0.9],
                        opacity: [0.4, 0.75, 0.4],
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div
                      className="
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#691638]/10
                        bg-[#F3E7E3]
                        shadow-[0_5px_18px_rgba(105,22,56,0.045)]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        sm:h-[52px]
                        sm:w-[52px]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-[4px]
                          rounded-full
                          border
                          border-[#C890A7]/20
                        "
                      />

                      <span
                        className="
                          h-7
                          w-7
                          rounded-full
                          shadow-[0_4px_14px_rgba(105,22,56,0.10)]
                          transition-transform
                          duration-500
                          group-hover:scale-105
                          sm:h-8
                          sm:w-8
                        "
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mx-auto mt-7 h-px w-10 bg-[#C890A7]/22" />

              <p
                className="
                  mt-2
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-[#691638]
                "
              >
                Bethrothal palette
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   SPARKLE
========================================================= */

function Sparkle({
  className,
  delay = 0,
  small = false,
}: {
  className: string;
  delay?: number;
  small?: boolean;
}) {
  const size = small ? "h-3 w-3" : "h-5 w-5";

  return (
    <motion.div
      className={`absolute ${className} ${size}`}
      animate={{
        scale: [0.75, 1.15, 0.75],
        rotate: [0, 45, 90],
        opacity: [0.025, 0.1, 0.025],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-[#691638]
        "
      />

      <span
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          -translate-y-1/2
          bg-[#691638]
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[35%]
          w-[35%]
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-[#C890A7]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   EVENT CONTENT
========================================================= */

function EventContent({
  event,
  align = "left",
}: {
  event: {
    number: string;
    type: string;
    time: string;
    place: string;
    description: string;
    mapsUrl: string;
  };
  align?: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        max-w-md
        ${align === "right" ? "ml-auto" : ""}
      `}
    >
      {/* Number */}

      <div
        className={`
          flex
          items-center
          gap-3
          ${align === "right" ? "justify-end" : "justify-start"}
        `}
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#C890A7]
          "
        >
          {event.number}
        </span>

        <span className="h-px w-8 bg-[#C890A7]/25" />
      </div>

      {/* Title */}

      <h3
        className={`
          mt-3
          font-display
          text-3xl
          leading-none
          tracking-[-0.035em]
          text-[#691638]
          sm:text-4xl
          ${align === "right" ? "text-right" : "text-left"}
        `}
      >
        {event.type}
      </h3>

      {/* Meta */}

      <div
        className={`
          mt-3
          flex
          flex-wrap
          items-center
          gap-x-4
          gap-y-2
          ${align === "right" ? "justify-end" : "justify-start"}
        `}
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#691638]/65
          "
        >
          {event.time}
        </span>

        <span className="h-1 w-1 rounded-full bg-[#C890A7]" />

        <span
          className="
            inline-flex
            items-center
            gap-1.5
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#691638]/50
          "
        >
          <Church size={12} strokeWidth={1.3} className="text-[#C890A7]" />

          {event.place}
        </span>
      </div>

      {/* Description */}

      <p
        className={`
          mt-4
          text-xs
          leading-6
          text-[#691638]/55
          sm:text-sm
          ${align === "right" ? "text-right" : "text-left"}
        `}
      >
        {event.description}
      </p>

      {/* Location */}

      <div
        className={`
          ${align === "right" ? "text-right" : "text-left"}
        `}
      >
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="
            group
            mt-4
            inline-flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#691638]/65
            transition-colors
            duration-300
            hover:text-[#691638]
          "
        >
          Open location
          <ArrowUpRight
            size={12}
            strokeWidth={1.4}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>
      </div>
    </motion.div>
  );
}
