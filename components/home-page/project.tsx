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
    description: "Platform latihan soal interaktif untuk persiapan ujian.",
    tech: ["Next.js", "Laravel", "Tailwind"],
  },
  {
    title: "Project Keren Kedua",
    image: "/lory.jpg",
    link: "https://link-project-2.com",
    description: "Deskripsi singkat project kedua lu di sini bre.",
    tech: ["React", "Express", "MongoDB"],
  },
];

const Project = () => {
  // 🔥 FIX: bikin autoplay stabil (gak recreate terus)
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false, // penting biar tetap jalan
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-8">
          <Balancer>Selected Projects</Balancer>
        </h1>

        {/* Carousel */}
        <div
          className="overflow-hidden w-full max-w-lg mx-auto px-4 cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {PROJECTS.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-xs font-medium text-blue-500 hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-blue-500 w-4"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Project;