"use client"; // Wajib karena animasi itu butuh client-side

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container, Main, Section } from "@/components/craft";
import AboutPage from "@/components/home-page/about";
import FeatureRight from "@/components/home-page/skill";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import Project from "@/components/home-page/project";

// Variabel settingan animasi biar gak ngetik berulang
// Ganti bagian ini di page.tsx lu
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ jangan array dulu, ini paling aman
    },
  },
};

export default function Home() {
  return (
    <Main>
      <Section>
        <Container className="px-4 md:px-0">
          {/* 1. About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <AboutPage />
          </motion.div>

          {/* 2. Project Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }} // Kasih delay dikit biar munculnya gantian
          >
            <Project />
          </motion.div>

          {/* 3. Skill Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <FeatureRight />
          </motion.div>

          {/* 4. Footer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Footer />
          </motion.div>
        </Container>
      </Section>
    </Main>
  );
}