"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // Import plugin baru

import { Section, Container } from "@/components/craft";

const PROJECTS = [
  {
    title: "Mobile Website App Tryout",
    image: "/lory.jpg",
    link: "https://fe-deploy-olive.vercel.app/login",
    description: "Platform latihan soal interaktif untuk persiapan ujian.",
    tech: ["Laravel 10", "Tailwind"],
  },
  {
    title: "Public Speaking Class",
    image: "/pub.jpg",
    link: "#",
    description: "Project dokumentasi kegiatan public speaking.",
    tech: ["Communication"],
  },
  {
    title: "Professional Certification",
    image: "/sertif1.jpg",
    link: "#",
    description: "Sertifikasi keahlian IT tingkat nasional.",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Advanced Web Project",
    image: "/ser2.jpg",
    link: "#",
    description: "Pengembangan sistem database terintegrasi.",
    tech: ["React", "PostgreSql"],
  },
];

const Project = () => {
  // Setup AutoScroll
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true, // Biar user bisa geser bebas (gak kaku per slide)
      align: "start"
    },
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: 0.30, // Atur kecepatan di sini (makin kecil makin pelan/smooth)
        stopOnInteraction: false, // Tetap jalan setelah di-drag user
        stopOnMouseEnter: true, // Berhenti pas kursor nempel (sesuai request lu)
      })
    ]
  );

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-10 text-3xl font-bold">
          <Balancer>Proyek dan sertifikat</Balancer>
        </h1>

        {/* Carousel Viewport - Dibuat max-w-full biar panjang kalau di desktop */}
        <div className="overflow-hidden w-full max-w-5xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex ml-[-1rem]"> 
            {PROJECTS.map((project, index) => (
              // Lebar card dibuat tetap (370px) biar pas di mobile & web
              <div key={index} className="flex-[0_0_300px] md:flex-[0_0_370px] min-w-0 pl-4">
                <div className="group h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center text-xs font-bold text-blue-500 hover:gap-2 transition-all"
                    >
                      VIEW PROJECT <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default Project;