"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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

  return (
    <main className="wedding-noise overflow-x-clip">
      <AnimatePresence mode="wait">
        {!opened && (
          <SaveTheDate key="save-date" onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.div>
      )}
    </main>
  );
}
