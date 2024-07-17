import ScrollToTopButton from "@/components/Atoms/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/components/Molecule/Footer/Footer";
import Header from "@/components/Molecule/Header/Header";
import Hero from "@/components/Molecule/Hero/Hero";
import Content from "@/components/Organism/Content/Content";


export default function Home() {
  return (
    <div className='bg-black-08 bg-[url("/images/hero.png")] bg-contain bg-no-repeat'>
      <Header page="home" />
      <Hero />
      <Content />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
