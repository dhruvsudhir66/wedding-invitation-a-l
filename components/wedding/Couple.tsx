"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const people = [
  {
    role: "The bride",
    name: "Aneena Vincent",
    image: "/images/aneena.jpeg",
    family:
      "Daughter of Vincent & Lilly and sister to Alwin. A close-knit family rooted in love, faith, and togetherness.",
    work: "Works in technology, building a career around data, creativity, and solving meaningful problems.",
  },
  {
    role: "The groom",
    name: "Loyed Varghese",
    image: "/images/loyed.jpeg",
    family:
      "Son of Varghese & Ancy and brother to Leanda. Surrounded by a warm family and the people who have shaped his journey.",
    work: "Works as a Merchant Navy officer, travelling the seas while building a life grounded in family and purpose.",
  },
];

const particles = Array.from({ length: 26 }, (_, index) => ({
  left: `${4 + ((index * 43) % 92)}%`,
  top: `${8 + ((index * 31) % 84)}%`,
  size: index % 7 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  delay: index * 0.3,
  duration: 5 + (index % 5),
}));

export default function Couple() {
  return (
    <section
      id="couple"
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--off-white)]
        section-pad
      "
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[460px]
          w-[460px]
          -translate-x-1/2
          rounded-full
          bg-[#c9aaa7]/[0.045]
          blur-[90px]
        "
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          top-[18%]
          h-72
          w-72
          rounded-full
          bg-[#d7b8ae]/[0.04]
          blur-[75px]
        "
        animate={{
          x: [0, 25, 0],
          y: [0, -14, 0],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-[10%]
          h-80
          w-80
          rounded-full
          bg-[#c9aaa7]/[0.035]
          blur-[85px]
        "
        animate={{
          x: [0, -24, 0],
          y: [0, 18, 0],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fine background grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
          [background-image:radial-gradient(rgba(53,49,46,0.8)_0.5px,transparent_0.5px)]
          [background-size:5px_5px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="
              absolute
              rounded-full
              bg-[#b88f88]/45
              shadow-[0_0_9px_rgba(184,143,136,0.16)]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0, 0.45, 0.18, 0],
              y: [0, -18, -36],
              x: [0, index % 2 === 0 ? 7 : -7, index % 2 === 0 ? -4 : 4],
              scale: [0.65, 1.2, 0.75],
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

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="container-wedding relative z-10">
        <SectionHeading
          eyebrow="Meet the couple"
          title="Two lives, one beautiful beginning."
          description="A little glimpse into the people behind the invitation."
        />

        {/* =====================================================
            COUPLE GRID
        ===================================================== */}

        <div className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
          {/* Desktop center line */}
          <motion.div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[12%]
              hidden
              h-[76%]
              w-px
              -translate-x-1/2
              bg-[var(--line)]
              md:block
            "
            animate={{
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center diamond */}
          <motion.div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rotate-45
              border
              border-[var(--terracotta)]/50
              bg-[var(--off-white)]
              md:block
            "
            animate={{
              rotate: [45, 135, 225, 315, 405],
              scale: [1, 1.15, 1, 1.15, 1],
              opacity: [0.5, 0.9, 0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {people.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.1}>
              <article
                className={`
                  group
                  relative
                  ${index === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}
                `}
              >
                {/* =================================================
                    PORTRAIT
                ================================================= */}

                <div className="relative mx-auto aspect-[4/5] w-[92%] sm:w-[88%]">
                  {/* Outer floating halo */}
                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      -inset-[4%]
                      rounded-[48%_52%_45%_55%]
                      bg-[#b88f88]/[0.035]
                      blur-2xl
                    "
                    animate={{
                      scale: [1, 1.025, 1],
                      opacity: [0.35, 0.65, 0.35],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating editorial ring */}
                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      -inset-[3%]
                      z-10
                      rounded-[48%_52%_45%_55%]
                      border
                      border-[#b88f88]/20
                    "
                    animate={{
                      rotate: [0, 1.5, 0, -1.5, 0],
                      scale: [1, 1.012, 1],
                      opacity: [0.45, 0.8, 0.45],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Secondary orbit line */}
                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      -inset-[6%]
                      z-10
                      rounded-[46%_54%_48%_52%]
                      border
                      border-[#b88f88]/[0.08]
                    "
                    animate={{
                      rotate: [0, -2, 0, 2, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Reduced portrait halo */}
                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-[4%]
                      rounded-[48%_52%_45%_55%]
                      bg-[#b88f88]/[0.07]
                      blur-xl
                      scale-[1.015]
                    "
                    animate={{
                      scale: [1.015, 1.035, 1.015],
                      opacity: [0.45, 0.75, 0.45],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main portrait */}
                  <motion.div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      bg-[#c9b7ae]
                      [clip-path:polygon(
                        8%_3%,
                        48%_0%,
                        91%_5%,
                        97%_31%,
                        94%_70%,
                        87%_94%,
                        55%_98%,
                        17%_95%,
                        3%_72%,
                        5%_30%
                      )]
                    "
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role}`}
                      fill
                      className="
                        object-cover
                        grayscale-[18%]
                        sepia-[8%]
                        saturate-[86%]
                        contrast-[96%]
                        brightness-[0.96]
                        transition-transform
                        duration-[1600ms]
                        ease-out
                        group-hover:scale-[1.045]
                        group-hover:translate-y-[-3px]
                      "
                      sizes="(max-width: 768px) 92vw, 42vw"
                    />

                    {/* Subtle warm photo treatment */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#9d6f62]/[0.08]
                        mix-blend-color
                      "
                    />

                    {/* Subtle photographic edges */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(
                          ellipse_at_center,
                          transparent_38%,
                          rgba(53,49,46,0.055)_72%,
                          rgba(53,49,46,0.11)_100%
                        )]
                      "
                    />

                    {/* Soft lower fade */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-[25%]
                        bg-gradient-to-t
                        from-[var(--off-white)]
                        via-[var(--off-white)]/25
                        to-transparent
                      "
                    />

                    {/* Subtle grain */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.06]
                        mix-blend-overlay
                        [background-image:radial-gradient(rgba(255,255,255,.8)_0.6px,transparent_0.6px)]
                        [background-size:4px_4px]
                      "
                    />

                    {/* =================================================
                        CINEMATIC LIGHT REFLECTION
                    ================================================= */}

                    <motion.div
                      className="
                        pointer-events-none
                        absolute
                        -left-[40%]
                        top-[-10%]
                        z-10
                        h-[120%]
                        w-[24%]
                        rotate-[12deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.10]
                        to-transparent
                        blur-xl
                      "
                      animate={{
                        x: ["0%", "560%"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatDelay: 8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* Soft moving glow */}
                    <motion.div
                      className="
                        pointer-events-none
                        absolute
                        left-[10%]
                        top-[15%]
                        z-10
                        h-28
                        w-28
                        rounded-full
                        bg-[#f8ebe6]/[0.045]
                        blur-3xl
                      "
                      animate={{
                        x: [0, 30, 10, 0],
                        y: [0, 12, -6, 0],
                        opacity: [0.25, 0.55, 0.3, 0.25],
                        scale: [1, 1.15, 0.95, 1],
                      }}
                      transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Fine vertical light */}
                    <motion.div
                      className="
                        pointer-events-none
                        absolute
                        bottom-[15%]
                        right-[12%]
                        z-10
                        h-[35%]
                        w-px
                        rotate-[12deg]
                        bg-gradient-to-b
                        from-transparent
                        via-white/[0.16]
                        to-transparent
                        blur-[2px]
                      "
                      animate={{
                        opacity: [0.15, 0.5, 0.15],
                        scaleY: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* =================================================
                      FINE EDITORIAL OUTLINE
                  ================================================= */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-[10px]
                      z-20
                      border
                      border-[#9d6f62]/30
                      [clip-path:polygon(
                        8%_3%,
                        48%_0%,
                        91%_5%,
                        97%_31%,
                        94%_70%,
                        87%_94%,
                        55%_98%,
                        17%_95%,
                        3%_72%,
                        5%_30%
                      )]
                    "
                    animate={{
                      opacity: [0.45, 0.8, 0.45],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* =================================================
                      CORNER ACCENTS
                  ================================================= */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      left-[7%]
                      top-[7%]
                      z-30
                      h-5
                      w-5
                      border-l
                      border-t
                      border-[#9d6f62]/60
                    "
                    animate={{
                      opacity: [0.4, 0.85, 0.4],
                      x: [0, 2, 0],
                      y: [0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[7%]
                      right-[7%]
                      z-30
                      h-5
                      w-5
                      border-b
                      border-r
                      border-[#9d6f62]/60
                    "
                    animate={{
                      opacity: [0.4, 0.85, 0.4],
                      x: [0, -2, 0],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* =================================================
                      FLOATING DIAMOND
                  ================================================= */}

                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      right-[4%]
                      top-[15%]
                      z-30
                      h-2
                      w-2
                      rotate-45
                      border
                      border-[#b88f88]/50
                      bg-[var(--off-white)]
                    "
                    animate={{
                      y: [0, -7, 0],
                      opacity: [0.35, 0.85, 0.35],
                      rotate: [45, 55, 45],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Second tiny accent */}
                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      left-[13%]
                      bottom-[20%]
                      z-30
                      h-1
                      w-1
                      rounded-full
                      bg-[#f8ebe6]/70
                      shadow-[0_0_8px_rgba(248,235,230,0.35)]
                    "
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.25, 0.75, 0.25],
                    }}
                    transition={{
                      duration: 4,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* =================================================
                      ROLE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-[10%]
                      left-[8%]
                      z-30
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span className="h-px w-7 bg-[#f7f3ed]/70" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.28em]
                        text-[#f7f3ed]
                        drop-shadow-[0_1px_5px_rgba(0,0,0,.25)]
                      "
                    >
                      {person.role}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    DETAILS
                ================================================= */}

                <div
                  className="
                    relative
                    mx-auto
                    w-[92%]
                    border-b
                    border-[var(--line)]
                    py-7
                    sm:w-[88%]
                    md:py-8
                  "
                >
                  {/* Name */}
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p
                        className="
                          mb-2
                          text-[8px]
                          uppercase
                          tracking-[0.25em]
                          text-[var(--terracotta)]
                        "
                      >
                        {index === 0 ? "She" : "He"}
                      </p>

                      <h3
                        className="
                          font-display
                          text-[34px]
                          leading-none
                          tracking-[-0.035em]
                          text-[var(--ink)]
                          sm:text-4xl
                        "
                      >
                        {person.name}
                      </h3>
                    </div>

                    <motion.span
                      className="
                        pt-1
                        font-display
                        text-xl
                        italic
                        text-[var(--terracotta)]/60
                      "
                      animate={{
                        opacity: [0.5, 0.9, 0.5],
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 5,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      0{index + 1}
                    </motion.span>
                  </div>

                  {/* Family */}
                  <div className="mt-7">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.24em]
                        text-[var(--terracotta)]
                      "
                    >
                      Family
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-[12px]
                        leading-6
                        text-[var(--muted)]
                        sm:text-[13px]
                        sm:leading-7
                      "
                    >
                      {person.family}
                    </p>
                  </div>

                  {/* What we do */}
                  <div className="mt-6">
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.24em]
                        text-[var(--terracotta)]
                      "
                    >
                      What we do
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-[12px]
                        leading-6
                        text-[var(--muted)]
                        sm:text-[13px]
                        sm:leading-7
                      "
                    >
                      {person.work}
                    </p>
                  </div>

                  {/* Small editorial footer */}
                  <div className="mt-7 flex items-center gap-3">
                    <motion.span
                      className="
                        h-1
                        w-1
                        rotate-45
                        bg-[var(--terracotta)]/60
                      "
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.9, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.span
                      className="h-px w-12 bg-[var(--line)]"
                      animate={{
                        scaleX: [1, 1.25, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-[var(--muted)]/60
                      "
                    >
                      Aneena & Loyed
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
