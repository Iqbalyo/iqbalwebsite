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
        <div className="flex flex-col gap-6" id="skill">
          <h3 className="text-4xl">
            <Balancer>
              Skill & Development tools
       </Balancer>
          </h3>
        <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center">
  
  <Image src="/nextjs-icon.svg" width={80} height={40} alt="Next.js" />
  <Image src="/html5.svg" width={80} height={40} alt="HTML5" />
  <Image src="/lara.svg" width={80} height={40} alt="laravel" />
  <Image src="/bootsrap.svg" width={80} height={40} alt="Bootstrap" />

</div>
         
        </div>
      </Container>
    </Section>
  );
};

export default SkillPage;
