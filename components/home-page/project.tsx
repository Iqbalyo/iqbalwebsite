"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Section, Container } from "@/components/craft";

const PROJECTS = [
  {
    title: "Aplikasi Tryout Online",
    image: "/lory.jpg",
    link: "http://lorytry.infinityfreeapp.com",
    description: "Platform latihan soal interaktif untuk persiapan ujian cpns.",
    tech: ["Laravel 10", "Tailwind"],
  },
  {
    title: "Web Galang Dana",
    image: "/laara.jpg",
    description: "Course Web Developer & Spetie untuk website Galang dana",
    tech: ["Laravel 11", "Tailwind", "Spatie"],
  },
  {
    title: "Pemrograman Javascript",
    image: "/serti3.jpg",
    description: "Pembelajaran Mengenai Fundemental,Logika,OOP hingga Testing pada Javascript.",
    tech: ["Javascript", "Node js"],
  },
  {
    title: "Logika Pemrograman",
    image: "/serti5.jpg",
    description: "Pembelajaran Computational Thinking meliputi dekomposisi,pengenalan pola,algoritma hingga evaluai.",
    tech: ["Computational Thinking", "Core concept"],
  },
  {
    title: "Front Web Developer Expert.",
    image: "/ser2.jpg",
    description: "Pembelajaran mengembangkan website yg optimal,responsif,memiliki akseblitas yg baik.",
    tech: ["Mobile first", "Automation Testing", "Web Performance"],
  },
  {
    title: "Databases, Specialist Certification",
    image: "/serti6.jpg",
    description: "Lulus dalam ujian Sertifikat Database ITS dengan nilai 800+.",
    tech: ["Database", "mysql"],
  },
  {
    title: "Fullstack",
    image: "/sertif1.jpg",
    description: "Pembelajaran Full stack Web Developer dengan menggunakan React js.",
    tech: ["React", "Express", "PostgreSql"],
  },
  {
    title: "Public Speaking Class",
    image: "/pub.jpg",
    description: "Pembelajaran public speaking.",
    tech: ["Communication"],
  },
];

const Project = () => {
  // 🔥 Ganti link ini ke LinkedIn atau Drive sertifikat lu
  const DEFAULT_CERT_LINK = "https://drive.google.com/drive/folders/14PiFSwPv9cKvDXBwMqYork8s35tesU-U?usp=drive_link";

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true, 
      align: "start"
    },
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: 0.5, 
        stopOnInteraction: false, 
        stopOnMouseEnter: true, 
      })
    ]
  );

  return (
    <Section id="project">
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-10 text-3xl font-bold">
          <Balancer>Proyek dan Sertifikat</Balancer>
        </h1>

        <div className="overflow-hidden w-full max-w-5xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
          {/* ml-[-1rem] untuk menyeimbangkan pl-4 agar tetap center */}
          <div className="flex ml-[-1rem]"> 
            {/* Duplikasi list agar loop terasa beneran infinite tanpa jeda kosong */}
            {[...PROJECTS, ...PROJECTS].map((project, index) => {
              // Logika Link Otomatis
              const isProject = project.link && project.link !== "#";
              const finalLink = isProject ? project.link : DEFAULT_CERT_LINK;

              return (
                <div key={index} className="flex-[0_0_300px] md:flex-[0_0_370px] min-w-0 pl-4">
                  <div className="group h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                    
                    {/* 📸 IMAGE AREA: Edge-to-edge dengan aspec ratio 4/3 biar mepet mentok */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 📝 CONTENT AREA */}
                    <div className="p-6 text-left">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {project.description}
                      </p>

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
                        href={finalLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center text-xs font-bold !text-blue-500 hover:gap-2 transition-all"
                      >
                        {isProject ? "Lihat Project" : "Lihat Sertifikat"} <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Project;