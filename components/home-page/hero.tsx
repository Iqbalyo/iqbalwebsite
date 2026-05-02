// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center px-4">
          <h1 className="!mb-0 text-2xl sm:text-3xl md:text-4xl">
    <Balancer>Junior Front-End Web</Balancer>
  </h1>

  <h3 className="text-muted-foreground text-sm sm:text-base md:text-lg">
    <Balancer>
      Passionate about learning and improving web development skills...
    </Balancer>
  </h3>
        <div className="not-prose mt-6 flex flex-col sm:flex-row gap-2 md:mt-10">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Let&apos;s Connect
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
