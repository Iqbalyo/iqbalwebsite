// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

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
          <Balancer>Project</Balancer>
        </h1>
        <div>
          <Link
            href="https://fe-deploy-olive.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/unama.jpg"
              width={500}
              height={50}
              alt="nextjs"
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            />
          </Link>
        </div>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              website monitoring aktivitas mahasiswa universitas dinamika bangsa
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Project;
