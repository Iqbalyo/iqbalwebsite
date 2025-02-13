// React and Next.js imports
import Link from "next/link";


// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

const Project = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="!mb-0">
          <Balancer>Junior Front-End Web</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Passionate about learning and improving web development skills to
            deliver functional and engaging user experiences
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
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

export default Project;
