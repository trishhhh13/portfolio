import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Portfolio from "./components/portfolio";
import Copyright from "./components/reusables/copyright";
import Services from "./components/services";
import Skills from "./components/skills";
import Testimonial from "./components/testimonial";

// pages/index.js

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <Header />
      <section className="w-full" id="introduction">
        <Introduction />
      </section>
      <section className="w-full" id="about">
        <About />
      </section>
      <section className="w-full" id="skills">
        <Skills />
      </section>
      <section className="w-full" id="portfolio">
        <Portfolio />
      </section>
      <section className="w-full" id="services">
        <Services />
      </section>
      <section className="w-full" id="testimonial">
        <Testimonial />
      </section>
      <section className="w-full" id="contact">
        <Contact />
      </section>
      <Copyright />
    </main>
  );
}
