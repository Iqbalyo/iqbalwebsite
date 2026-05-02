// About.tsx
import Image from "next/image";
import Link from "next/link";
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="py-8 md:py-12"> {/* Pakai div biasa buat kontrol padding */}
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-12">
        
        {/* Sisi Kiri: Image - Dikecilkan dikit biar gak makan tempat di HP */}
        <div className="not-prose relative aspect-square w-full max-w-[300px] mx-auto md:max-w-full md:h-96 overflow-hidden rounded-2xl border shadow-sm">
          <Image
            src="/done.png"
            fill
            alt="Iqbal Mustakim"
            className="object-cover"
            priority
          />
        </div>

        {/* Sisi Kanan: Content */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Hello! I am Iqbal Mustakim
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:max-w-[90%]">
            &quot;A Junior Front-End Developer with a strong foundation in modern web technologies, 
            including HTML, CSS, JavaScript, Bootstrap, Laravel, and Next.js. 
            Passionate about creating seamless user experiences.&quot;
          </p>

          {/* Button Group - Dibikin rapi di Mobile */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button className="w-full sm:w-fit bg-[#0077b5] hover:bg-[#005582] text-white border-none px-8" asChild>
              <Link href="https://www.linkedin.com/in/iqbalmustakim">
                Linkedin
              </Link>
            </Button>

            <Button variant="ghost" className="text-xs sm:text-sm h-auto py-2" asChild>
              <Link href="#" className="flex items-center gap-1">
                Ex Dicoding Front-End <span className="hidden sm:inline">Batch 6</span> →
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage; 