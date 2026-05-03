// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

export default function Footer() {
  return (
    <footer>
      <Section className="border-t">
        <Container className="grid gap-12 grid-cols-1 md:grid-cols-[1.5fr_1fr]">
          {/* Sisi Kiri: Branding */}
          <div className="grid gap-6">
            <Link href="/">
              <h1 className="text-xl font-bold">iqbal.</h1>
            </Link>
            <p className="max-w-sm text-sm md:text-base text-muted-foreground">
              <Balancer>
                Praktisi IT dan Pengembang Perangkat Lunak yang berfokus pada solusi teknologi sistematis dan pengembangan berpikir komputasi.
              </Balancer>
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              © {new Date().getFullYear()} Iqbal Mustakim. All rights reserved.
            </p>
          </div>

          {/* Sisi Kanan: Links & Contact (Sejajar di Mobile & Desktop) */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {/* 1. Links Column */}
            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-sm md:text-base">Links</h5>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#about" className="hover:underline hover:text-foreground transition-all">About me</Link>
                <Link href="#skill" className="hover:underline hover:text-foreground transition-all">Skill</Link>
                <Link href="#project" className="hover:underline hover:text-foreground transition-all">Project</Link>
              </div>
            </div>

            {/* 2. Contact Column */}
            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-sm md:text-base">Contact</h5>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="https://wa.me/6283157725992" target="_blank" className="hover:underline hover:text-foreground transition-all">WhatsApp</a>
                <a href="mailto:iqbalmustakimi734@gmail.com" className="hover:underline hover:text-foreground transition-all">Email</a>
                <a href="https://github.com/Iqbalyo" target="_blank" className="hover:underline hover:text-foreground transition-all">GitHub</a>
                <a href="https://www.linkedin.com/in/iqbalmustakim" target="_blank" className="hover:underline hover:text-foreground transition-all">LinkedIn</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}