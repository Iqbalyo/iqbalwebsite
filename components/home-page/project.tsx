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
  {/* Container utama harus punya overflow-hidden biar gambar yang nempel ke atas terpotong radiusnya */}
  <div className="group h-full overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
    
    {/* 📸 IMAGE AREA: Hapus semua padding (p-3/p-4) agar gambar nempel ke atas, kiri, dan kanan */}
    <div className="relative aspect-video w-full overflow-hidden">
      <Image
        src={project.image}
        fill
        alt={project.title}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        // object-cover hukumnya WAJIB bre biar gambar lu nge-zoom dikit buat nutupin area putih itu
      />
    </div>

    {/* 📝 CONTENT AREA: Tetap pake p-6 buat teksnya */}
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-widest font-bold bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={finalLink as string}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center text-xs font-bold tracking-wider !text-blue-600 hover:gap-3 transition-all"
      >
        {isProject ? "LIHAT PROYEK" : "LIHAT SERTIFIKAT"} 
        <span className="ml-1.5 bg-blue-50 p-1 rounded-full group-hover:bg-blue-100 transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </span>
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