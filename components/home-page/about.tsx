// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";

const AboutPage = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src="/profile.jpg"
            width={1000}
            height={50}
            alt="nextjs"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">About me</h3>
          <p className="font-light leading-[1.4] opacity-70">
            &quot;Hello! I am a Junior Front-End Web Developer with a background in
            Information Systems. I have hands-on experience with HTML, CSS,
            JavaScript, Bootstrap, Laravel, and Next.js. My goal is to
            specialize and advance in front-end development, continually
            enhancing user experiences through innovative design and efficient
            coding practices.&quot;
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">
                Ex Dicoding Front end web Batch 6 Kampus merdeka -&gt;
              </Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default AboutPage;
