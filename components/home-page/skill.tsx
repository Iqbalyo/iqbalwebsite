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
          <div className="mt-6 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-4 items-center justify-items-center">
          <div className="flex justify-center p-4">
              <Image src="/nextjs-icon.svg" width={80} height={40} alt="Next.js" className="grayscale hover:grayscale-0 transition"/>
            </div>
            <div className="flex justify-center p-4">
              <Image src="/html5.svg" width={80} height={40} alt="Next.js" className="grayscale hover:grayscale-0 transition"/>
            </div>
            <div className="flex justify-center p-4">
            <Image src="/lara.svg" width={80} height={40} alt="Next.js" className="grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex justify-center p-4">
            <Image src="/bootsrap.svg" width={80} height={40} alt="Next.js" className="grayscale hover:grayscale-0 transition"/>
            </div>
            </div>
         
        </div>
      </Container>
    </Section>
  );
};

export default SkillPage;
