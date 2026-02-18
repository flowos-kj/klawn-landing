"use client";

import { motion } from "motion/react";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/samsung.svg", alt: "Samsung", tall: false },
  { src: "/logos/lg.png", alt: "LG", tall: false },
  { src: "/logos/lotte.svg", alt: "Lotte", tall: false },
  { src: "/logos/skplanet.svg", alt: "SK Planet", tall: false },
  { src: "/logos/cheil.jpg", alt: "Cheil", tall: false },
  { src: "/logos/hsad.png", alt: "HSAD", tall: false },
  { src: "/logos/krispy-kreme.png", alt: "Krispy Kreme", tall: false },
  { src: "/logos/jinro.webp", alt: "JINRO", tall: true },
  { src: "/logos/hancom.webp", alt: "Hancom", tall: true },
  { src: "/logos/ilgram.png", alt: "il gram", tall: false },
  { src: "/logos/kinkos.png", alt: "Kinko's", tall: false },
  { src: "/logos/mut.webp", alt: "MUT", tall: true },
];

export function CorporateLogos() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-3 text-2xl font-bold text-navy-dark sm:text-3xl">
            신뢰하는 기업들
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted sm:text-base">
            대한민국 대표 브랜드가 선택한 AI 에이전트 파트너
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-6"
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-2 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              title={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={56}
                className={`${logo.tall ? "h-12 sm:h-14" : "h-8 sm:h-10"} w-auto max-w-[120px] object-contain sm:max-w-[140px]`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
