"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Section, Container } from "@/components/craft";

const PROJECTS = [
  {
    title: "Mobile Website App Tryout",
    image: "/lory.jpg",
    link: "https://fe-deploy-olive.vercel.app/login",
    description: "Platform latihan soal interaktif untuk persiapan ujian."
  },
  {
    title: "Project Keren Kedua",
    image: "/lory.jpg",
    link: "https://link-project-2.com",
    description: "Deskripsi singkat project kedua lu di sini bre."
  },
];

const Project = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-8">
          <Balancer>Selected Projects</Balancer>
        </h1>

        <div className="overflow-hidden w-full max-w-lg cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {PROJECTS.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                {/* Wrapper Card Utama */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Bagian Gambar */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Bagian Teks (Keterangan) */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <div className="mt-4 text-xs font-medium text-blue-500 flex items-center gap-1">
                      View Project <span>→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Project;