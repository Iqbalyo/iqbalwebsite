// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/next.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
        {/* Tetap menggunakan grid yang sama agar responsive aman */}
        <Container className="grid gap-12 grid-cols-1 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/">
              <h1 className="text-xl font-bold">iqbal.</h1>
            </Link>
            <p>
              <Balancer>
                Praktisi IT dan Pengembang Perangkat Lunak yang berfokus pada solusi teknologi sistematis dan pengembangan berpikir komputasi.
              </Balancer>
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Iqbal Mustakim. All rights reserved.
            </p>
          </div>

          {/* Sisi Tengah: Navigation Links (Sesuai Anchor Link tadi) */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Links</h5>
            <Link href="#about" className="hover:underline text-muted-foreground hover:text-foreground transition-all">About me</Link>
            <Link href="#skill" className="hover:underline text-muted-foreground hover:text-foreground transition-all">Skill</Link>
            <Link href="#project" className="hover:underline text-muted-foreground hover:text-foreground transition-all">Project</Link>
          </div>

          {/* Sisi Kanan: Contact (WhatsApp, Email, LinkedIn, GitHub) */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Contact</h5>
            <a href="https://wa.me/6282211933095" target="_blank" className="hover:underline text-muted-foreground hover:text-foreground transition-all">WhatsApp</a>
            <a href="mailto:mustakimiqbal@gmail.com" className="hover:underline text-muted-foreground hover:text-foreground transition-all">Email</a>
            <a href="https://github.com/iqbalmustakim" target="_blank" className="hover:underline text-muted-foreground hover:text-foreground transition-all">GitHub</a>
            <a href="https://www.linkedin.com/in/iqbalmustakim" target="_blank" className="hover:underline text-muted-foreground hover:text-foreground transition-all">LinkedIn</a>
          </div>
        </Container>
      </Section>
    </footer>
  );
}