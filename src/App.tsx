import About from "./components/sections/about/About";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import LandingPage from "./components/sections/landingPage/LandingPage";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";

function App() {
    return (
        <main id="main" className="bg-grey-900 w-full h-screen">
            <LandingPage />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
