import { Container, Main, Section } from "@/components/craft";
import AboutPage from "@/components/home-page/about";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Iqbalyoo..",
};

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <AboutPage />
        </Container>
      </Section>
    </Main>
  );
}
