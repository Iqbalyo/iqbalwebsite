"use client"; // Wajib karena pake hook & interaksi

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Data Project - Tinggal tambah di sini kalau ada project baru
const PROJECTS = [
  {
    title: "Website Monitoring Mahasiswa UNAMA",
    image: "/unama.jpg",
    link: "https://fe-deploy-olive.vercel.app/login",
  },
  {
    title: "Project Keren Kedua",
    image: "/project2.jpg", // Pastiin file ada di folder public
    link: "https://link-project-2.com",
  },
];

const Project = () => {
  // Setup Embla dengan Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="mb-8">
          <Balancer>Selected Projects</Balancer>
        </h1>

        {/* Viewport Carousel */}
        <div className="overflow-hidden w-full max-w-2xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {PROJECTS.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="flex flex-col items-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      width={500}
                      height={300}
                      alt={project.title}
                      className="rounded-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    />
                  </Link>
                  
                  <div className="not-prose mt-6 flex gap-2 md:mt-8">
                    <Button asChild>
                      <Link href={project.link} target="_blank">
                        {project.title}
                      </Link>
                    </Button>
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