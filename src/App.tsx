import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
