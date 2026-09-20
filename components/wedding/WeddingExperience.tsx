"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import SaveTheDate from "@/components/wedding/SaveTheDate";
import Nav from "@/components/wedding/Nav";
import Hero from "@/components/wedding/Hero";
import Countdown from "@/components/wedding/Countdown";
import Marquee from "@/components/wedding/Marquee";
import Couple from "@/components/wedding/Couple";
import Story from "@/components/wedding/Story";
import Gallery from "@/components/wedding/Gallery";
import Venue from "@/components/wedding/Venue";
import RSVP from "@/components/wedding/RSVP";
import Upload from "@/components/wedding/Upload";
import Footer from "@/components/wedding/Footer";

export default function WeddingExperience() {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onOpen = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.muted = false;
        audioRef.current.volume = 0.65;

        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Unable to start wedding music:", error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const nextMuted = !muted;

    audioRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <main className="wedding-noise overflow-x-clip">
      {/* Wedding music */}
      <audio ref={audioRef} src="/music/kasoor.mpeg" preload="auto" loop />

      <AnimatePresence mode="wait">
        {!opened && (
          <SaveTheDate
            key="save-date"
            onOpen={() => {
              setOpened(true);
              onOpen();
            }}
          />
        )}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Nav />

          <Hero />
          <Countdown />
          {/* <Marquee /> */}
          <Couple />
          <Story />
          <Gallery />
          <Venue />
          <RSVP />
          <Upload />
          <Footer />

          {/* Music control */}
          <motion.button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute wedding music" : "Mute wedding music"}
            title={muted ? "Unmute music" : "Mute music"}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className="
    group
    fixed
    bottom-[calc(16px+env(safe-area-inset-bottom))]
    right-[calc(16px+env(safe-area-inset-right))]
    z-50
    flex
    h-11
    w-11
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-white/30
    bg-[#691638]/80
    text-[#FFF8F5]
    shadow-[0_8px_30px_rgba(69,25,42,0.18)]
    backdrop-blur-md
    transition-all
    duration-500
    hover:border-white/45
    hover:bg-[#691638]/90
    sm:bottom-[calc(24px+env(safe-area-inset-bottom))]
    sm:right-[calc(24px+env(safe-area-inset-right))]
    sm:h-12
    sm:w-12
  "
          >
            {/* Soft ambient ring */}
            <span
              className="
      pointer-events-none
      absolute
      inset-0
      rounded-full
      border
      border-[#F8EBE6]/10
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
            />

            {/* Icon */}
            <AnimatePresence mode="wait" initial={false}>
              {muted ? (
                <motion.span
                  key="muted"
                  initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <VolumeX size={16} strokeWidth={1.35} />
                </motion.span>
              ) : (
                <motion.span
                  key="playing"
                  initial={{ opacity: 0, scale: 0.7, rotate: 12 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: -12 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Volume2 size={16} strokeWidth={1.35} />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Tiny status dot */}
            <motion.span
              animate={{
                scale: muted ? 0.7 : [0.8, 1, 0.8],
                opacity: muted ? 0.35 : [0.45, 0.9, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: muted ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="
      pointer-events-none
      absolute
      right-[7px]
      top-[7px]
      h-1
      w-1
      rounded-full
      bg-[#F8EBE6]
    "
            />
          </motion.button>
        </motion.div>
      )}
    </main>
  );
}
