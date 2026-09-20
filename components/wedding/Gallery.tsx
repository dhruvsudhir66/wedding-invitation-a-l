"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const photos = [
  {
    src: "/images/gallery/couple-gallery-1.webp",
    alt: "The beginning",
    number: "01",
    aspect: "aspect-[4/5]",
    imageClass: "object-[center_42%] scale-[1.14]",
    desktop: "md:col-span-4 md:translate-y-8",
    mobile: "translate-y-0",
  },
  {
    src: "/images/gallery/couple-gallery-2.webp",
    alt: "Together",
    number: "02",
    aspect: "aspect-[5/6]",
    imageClass: "object-[center_center] scale-[1.06]",
    desktop: "md:col-span-5 md:translate-y-[-10px]",
    mobile: "translate-y-6",
  },
  {
    src: "/images/gallery/couple-gallery-3.webp",
    alt: "A quiet moment",
    number: "03",
    aspect: "aspect-[4/5]",
    imageClass: "object-[center_48%] scale-[1.1]",
    desktop: "md:col-span-3 md:translate-y-28",
    mobile: "translate-y-0",
  },
  {
    src: "/images/gallery/couple-gallery-4.webp",
    alt: "Golden hour",
    number: "04",
    aspect: "aspect-[5/6]",
    imageClass: "object-[center_center] scale-[1.06]",
    desktop: "md:col-span-5 md:translate-y-20",
    mobile: "translate-y-10",
  },
  {
    src: "/images/gallery/couple-gallery-5.webp",
    alt: "Celebration",
    number: "05",
    aspect: "aspect-[4/5]",
    imageClass: "object-[center_42%] scale-[1.1]",
    desktop: "md:col-span-4 md:-translate-y-4",
    mobile: "translate-y-0",
  },
  {
    src: "/images/gallery/couple-gallery-7.webp",
    alt: "The details",
    number: "06",
    aspect: "aspect-[5/6]",
    imageClass: "object-[center_42%] scale-[1.14]",
    desktop: "md:col-span-5 md:translate-y-16",
    mobile: "translate-y-8",
  },
] as const;

const particles = Array.from({ length: 32 }, (_, index) => ({
  left: `${3 + ((index * 37) % 94)}%`,
  top: `${3 + ((index * 47) % 92)}%`,
  size: index % 8 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  delay: index * 0.22,
  duration: 5 + (index % 5),
}));

function Spark() {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center">
      <span className="absolute h-px w-5 bg-[#C890A7]/40" />
      <span className="absolute h-5 w-px bg-[#C890A7]/40" />
      <span className="relative h-1.5 w-1.5 rotate-45 bg-[#C890A7]/60" />
    </span>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#F8F8F6]
        py-20
        sm:py-24
        md:py-32
      "
    >
      {/* ═════════════════════════════════════════════════════
          IMMERSIVE BACKGROUND
      ═════════════════════════════════════════════════════ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main atmospheric glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[46%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C890A7]/[0.075]
            blur-[120px]
            sm:h-[520px]
            sm:w-[520px]
            md:h-[700px]
            md:w-[700px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Upper blush */}
        <motion.div
          className="
            absolute
            -left-40
            top-[8%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#D9AFC0]/[0.055]
            blur-[105px]
            sm:h-[430px]
            sm:w-[430px]
          "
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lower blush */}
        <motion.div
          className="
            absolute
            -right-40
            bottom-[2%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#C890A7]/[0.055]
            blur-[115px]
            sm:h-[480px]
            sm:w-[480px]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Warm light pocket */}
        <motion.div
          className="
            absolute
            left-[12%]
            top-[68%]
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#E8D8D2]/[0.65]
            blur-[90px]
          "
          animate={{
            x: [0, 40, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ═════════════════════════════════════════════
            LARGE EDITORIAL WATERMARK
        ═════════════════════════════════════════════ */}

        <div
          className="
            absolute
            left-1/2
            top-[46%]
            -translate-x-1/2
            -translate-y-1/2
            select-none
            font-serif
            text-[180px]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#691638]/[0.028]
            sm:text-[260px]
            md:text-[390px]
          "
        >
          A&L
        </div>

        {/* ═════════════════════════════════════════════
            ORBITAL VISUAL ELEMENT
        ═════════════════════════════════════════════ */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[47%]
            h-[440px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-[#C890A7]/[0.055]
            rotate-[18deg]
            sm:h-[620px]
            sm:w-[400px]
            md:h-[800px]
            md:w-[520px]
          "
          animate={{
            rotate: [18, 21, 18],
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2
            top-[47%]
            h-[390px]
            w-[210px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-[#691638]/[0.025]
            rotate-[-22deg]
            sm:h-[540px]
            sm:w-[300px]
            md:h-[720px]
            md:w-[390px]
          "
          animate={{
            rotate: [-22, -18, -22],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Central glowing point */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[47%]
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C890A7]/30
            blur-[3px]
          "
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ═════════════════════════════════════════════
            CINEMATIC LIGHT MOVEMENT
        ═════════════════════════════════════════════ */}

        <motion.div
          className="
            absolute
            -left-[40%]
            top-[-20%]
            h-[150%]
            w-[20%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.18]
            to-transparent
            blur-[50px]
          "
          animate={{
            x: ["0%", "700%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />

        {/* ═════════════════════════════════════════════
            FLOATING PARTICLES
        ═════════════════════════════════════════════ */}

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
                y: [0, -18, -32],
                x: [0, index % 2 === 0 ? 7 : -7, index % 2 === 0 ? -3 : 3],
                opacity: [0, 0.28, 0.12, 0],
                scale: [0.7, 1.2, 0.8],
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

        {/* ═════════════════════════════════════════════
            VERY SUBTLE GRAIN
        ═════════════════════════════════════════════ */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:radial-gradient(rgba(105,22,56,0.8)_0.5px,transparent_0.5px)]
            [background-size:6px_6px]
          "
        />

        {/* ═════════════════════════════════════════════
            OUTER FRAME
        ═════════════════════════════════════════════ */}

        <div
          className="
            absolute
            inset-4
            border
            border-[#691638]/[0.025]
            sm:inset-6
            md:inset-8
          "
        />

        <div
          className="
            absolute
            inset-7
            border
            border-[#C890A7]/[0.025]
            sm:inset-10
            md:inset-12
          "
        />

        {/* Corner details */}
        <div
          className="
            absolute
            left-6
            top-6
            h-8
            w-8
            border-l
            border-t
            border-[#691638]/[0.055]
            sm:left-10
            sm:top-10
          "
        />

        <div
          className="
            absolute
            right-6
            top-6
            h-8
            w-8
            border-r
            border-t
            border-[#691638]/[0.055]
            sm:right-10
            sm:top-10
          "
        />

        <div
          className="
            absolute
            bottom-6
            left-6
            h-8
            w-8
            border-b
            border-l
            border-[#691638]/[0.055]
            sm:bottom-10
            sm:left-10
          "
        />

        <div
          className="
            absolute
            bottom-6
            right-6
            h-8
            w-8
            border-b
            border-r
            border-[#691638]/[0.055]
            sm:bottom-10
            sm:right-10
          "
        />
      </div>

      {/* ═════════════════════════════════════════════════════
          CONTENT
      ═════════════════════════════════════════════════════ */}

      <div className="container-wedding relative z-10">
        {/* Heading */}
        <div className="relative">
          <SectionHeading
            eyebrow="A few frames"
            title="Moments worth keeping."
            align="center"
          />

          {/* Small floating visual marker */}
          <motion.div
            className="
              absolute
              left-1/2
              top-full
              mt-5
              -translate-x-1/2
            "
            animate={{
              y: [0, 4, 0],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Spark />
          </motion.div>
        </div>

        {/* ═════════════════════════════════════════════
            ASYMMETRIC MEMORY CONSTELLATION
        ═════════════════════════════════════════════ */}

        <div
          className="
            relative
            mt-24
            grid
            grid-cols-2
            gap-x-3
            gap-y-10
            sm:gap-x-5
            sm:gap-y-14
            md:mt-28
            md:grid-cols-12
            md:gap-x-6
            md:gap-y-24
          "
        >
          {/* Decorative vertical memory axis */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[-80px]
              left-1/2
              top-[-70px]
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#C890A7]/[0.14]
              to-transparent
              md:block
            "
          />

          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={index * 0.07}
              className={`
                relative
                h-full
                ${photo.desktop}
                ${photo.mobile}
              `}
            >
              <figure
                className="
                  group
                  relative
                  overflow-hidden
                  bg-[#E8E2DC]
                "
              >
                {/* Small orbital marker behind selected cards */}
                {(index === 1 || index === 4) && (
                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      -right-6
                      -top-6
                      z-0
                      h-16
                      w-16
                      rounded-full
                      border
                      border-[#C890A7]/[0.12]
                    "
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Image container */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    ${photo.aspect}
                  `}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index < 2}
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 768px) 50vw,
                      42vw
                    "
                    className={`
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1600ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.2]
                      ${photo.imageClass}
                    `}
                  />

                  {/* Image depth */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#321722]/[0.38]
                      via-transparent
                      to-white/[0.045]
                    "
                  />

                  {/* Center vignette */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(45,20,30,0.15)_100%)]
                    "
                  />

                  {/* Upper photographic haze */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-[30%]
                      bg-gradient-to-b
                      from-white/[0.08]
                      to-transparent
                    "
                  />

                  {/* Moving light sweep */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-[90%]
                      top-[-10%]
                      h-[120%]
                      w-[50%]
                      rotate-[14deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.17]
                      to-transparent
                      blur-md
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      group-hover:translate-x-[330%]
                    "
                  />

                  {/* Outer photo frame */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      z-20
                      border
                      border-white/45
                      transition-all
                      duration-700
                      group-hover:inset-3
                      group-hover:border-white/65
                    "
                  />

                  {/* Inner photo frame */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-4
                      z-20
                      border
                      border-[#F8EBE6]/25
                      opacity-75
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-30
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      border
                      border-white/45
                      bg-[#2C1D23]/[0.14]
                      text-[8px]
                      tracking-[0.12em]
                      text-white/95
                      backdrop-blur-[4px]
                      transition-all
                      duration-500
                      group-hover:bg-[#2C1D23]/[0.24]
                    "
                  >
                    {photo.number}
                  </div>

                  {/* Caption */}
                  <figcaption
                    className="
                      absolute
                      bottom-5
                      left-5
                      z-30
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-white/90
                      drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]
                      transition-all
                      duration-700
                      group-hover:-translate-y-1
                    "
                  >
                    {photo.alt}
                  </figcaption>

                  {/* Corner accent */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-5
                      right-5
                      z-30
                      h-3
                      w-3
                      border-b
                      border-r
                      border-white/45
                      transition-all
                      duration-700
                      group-hover:h-5
                      group-hover:w-5
                    "
                  />

                  {/* Tiny hover dot */}
                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      right-6
                      top-6
                      z-30
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/70
                    "
                    animate={{
                      opacity: [0.35, 0.8, 0.35],
                      scale: [0.8, 1.15, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* ═════════════════════════════════════════════
            ENDING VISUAL
        ═════════════════════════════════════════════ */}

        <div className="relative mt-20 flex items-center justify-center sm:mt-24">
          {/* Ambient glow */}
          <div
            className="
              pointer-events-none
              absolute
              h-20
              w-40
              rounded-full
              bg-[#C890A7]/[0.10]
              blur-[45px]
            "
          />

          <div className="relative flex items-center gap-5">
            <span className="h-px w-12 bg-[#691638]/[0.10] sm:w-20" />

            <motion.div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#C890A7]/30
              "
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="h-2 w-2 rotate-45 bg-[#C890A7]/65" />
            </motion.div>

            <span className="h-px w-12 bg-[#691638]/[0.10] sm:w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
