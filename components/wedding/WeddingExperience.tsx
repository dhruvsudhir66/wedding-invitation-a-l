"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
import { weddingConfig } from "@/config/wedding";

const { flags, music } = weddingConfig;

export default function WeddingExperience() {
  const [opened, setOpened] = useState(!flags.saveTheDate);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
      } else {
        if (!muted) {
          audio.play().catch(() => {
            // Browser may require user interaction again
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [muted]);

  const handleOpenWedding = async () => {
    setOpened(true);

    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.currentTime = 0;
      audio.volume = music.volume;
      audio.muted = false;

      await audio.play();
      setMuted(false);
    } catch (error) {
      console.error("Unable to start wedding music:", error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !muted;

    audio.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted && audio.paused && !document.hidden) {
      audio.play().catch(() => {});
    }
  };

  return (
    <main className="wedding-noise overflow-x-clip">
      {flags.music && (
        <audio
          ref={audioRef}
          src={music.src}
          preload={music.preload}
          loop={music.loop}
          playsInline
        />
      )}

      <AnimatePresence mode="wait">
        {flags.saveTheDate && !opened && (
          <SaveTheDate key="save-date" onOpen={handleOpenWedding} />
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
          {flags.nav && <Nav />}
          {flags.hero && <Hero />}
          {flags.countdown && <Countdown />}
          {flags.marquee && <Marquee />}
          {flags.couple && <Couple />}
          {flags.story && <Story />}
          {flags.gallery && <Gallery />}
          {flags.venue && <Venue />}
          {flags.rsvp && <RSVP />}
          {flags.upload && <Upload />}
          {flags.footer && <Footer />}

          {flags.music && (
            <motion.button
              type="button"
              onClick={toggleMute}
              aria-label={
                muted ? music.unmuteAria : music.muteAria
              }
              title={muted ? music.unmuteTitle : music.muteTitle}
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
                  fixed
                  bottom-6
                  right-6
                  z-50
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-(--theme-primary)/80
                  text-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/15
                "
            >
            {/* Ambient ring */}
            <span
              className="
      absolute
      inset-0
      rounded-full
      border
      border-white/10
      opacity-70
    "
            />

            {/* Icon */}
            <AnimatePresence mode="wait" initial={false}>
              {muted ? (
                <motion.span
                  key="muted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <VolumeX size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="playing"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Volume2 size={18} />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Status dot */}
            <motion.span
              className="
      absolute
      right-2
      top-1
      h-1
      w-1
      rounded-full
      bg-(--theme-accent)
      shadow-[0_0_5px_rgba(var(--theme-accent-rgb),0.7)]
    "
            />
          </motion.button>
          )}
        </motion.div>
      )}
    </main>
  );
}
