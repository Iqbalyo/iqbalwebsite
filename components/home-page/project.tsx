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
    description: "Platform latihan soal interaktif untuk persiapan ujian mahasiswa."
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
        <h1 className="mb-8 text-3xl md:text-4xl font-bold">
          <Balancer>Selected Projects</Balancer>
        </h1>

        {/* Container Carousel - Max width 370px biar pas di HP & Desktop */}
        <div className="overflow-hidden w-full max-w-[370px] cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {PROJECTS.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                
                {/* Card Utama */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* Bagian Gambar - Pakai aspect-[4/3] biar proporsi pas buat showcase */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      priority={index === 0} // Gambar pertama di-load duluan biar gak kedip
                      sizes="370px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bagian Teks - Padding disesuaikan biar gak terlalu lebar */}
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    <div className="mt-4 text-xs font-semibold text-blue-500 flex items-center gap-1 uppercase tracking-wider">
                      Preview Project <span>→</span>
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