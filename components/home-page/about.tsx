// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports


const AboutPage = () => {
  return (
    <Craft.Section>
      <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-12">
  
  {/* Image */}
  <div className="not-prose relative flex h-60 sm:h-72 md:h-96 overflow-hidden rounded-lg border">
    <Image
      src="/done.png"
      fill
      alt="nextjs"
      className="object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col gap-4 py-4 sm:py-6 md:py-8 text-center md:text-left">
    <h3 className="!my-0 text-xl sm:text-2xl">
      Hello! I am iqbal mustakim
    </h3>

    <p className="text-sm sm:text-base font-light leading-relaxed opacity-70">
      ...
    </p>

    <div className="not-prose flex flex-col sm:flex-row items-center md:items-start gap-2">
      <Button className="w-full sm:w-fit" asChild>
        <Link href="https://www.linkedin.com/in/iqbalmustakim">
          Linkedin
        </Link>
      </Button>

      <Button className="w-full sm:w-fit" variant="link" asChild>
        <Link href="#">
          Ex Dicoding Oke Front end web Batch 6 Kampus merdeka →
        </Link>
      </Button>
    </div>
  </div>
</div>
    </Craft.Section>
  );
};

export default AboutPage;
