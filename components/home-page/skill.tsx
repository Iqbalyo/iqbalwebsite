// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons

import { Coins } from "lucide-react";
import Image from "next/image";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};


const SkillPage = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Skill & Development tools
       </Balancer>
          </h3>
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
          <div>
              <Image src="/nextjs-icon.svg" width={100} height={50} alt="Next.js" />
            </div>
            <div>
              <Image src="/html5.svg" width={100} height={50} alt="HTML5" />
            </div>
            <div>
            <Image src="/lara.svg" width={100} height={50} alt="laravel" />
            </div>
            <div>
            <Image src="/bootsrap.svg" width={100} height={50} alt="HTML5" />
            </div>
            </div>
         
        </div>
      </Container>
    </Section>
  );
};

export default SkillPage;
