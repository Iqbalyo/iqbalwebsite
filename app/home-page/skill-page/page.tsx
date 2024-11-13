import { Container, Main, Section } from "@/components/craft";

import SkillPage from "@/components/home-page/skill";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Iqbalyoo..",
};

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <SkillPage />
        </Container>
      </Section>
    </Main>
  );
}
