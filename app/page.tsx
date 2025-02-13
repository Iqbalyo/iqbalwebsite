import { Container, Main, Section } from "@/components/craft";
import AboutPage from "@/components/home-page/about";
import FeatureRight from "@/components/home-page/skill";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import Project from "@/components/home-page/project";


export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <Project/>
         <AboutPage />
         <FeatureRight />
    
         
         <Footer />
        </Container>
      </Section>
    </Main>
  );
}
