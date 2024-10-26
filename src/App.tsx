import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <main className="bg-grey-900 w-full min-h-screen">
            <section className="overflow-hidden relative">
                <div className="z-10 absolute left-0 bottom-6 opacity-25 w-[132px] h-[132px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark flex-center transform -translate-x-[32px]">
                    <div className="bg-grey-900 rounded-full w-[100px] h-[100px]"></div>
                </div>
                <div className="z-10 absolute left-[15%] top-20 opacity-25 w-[110px] h-[110px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark transform rotate-45"></div>
                <div className="z-10 absolute left-1/3 bottom-1/4 opacity-25 w-[160px] h-[160px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark transform rotate-45"></div>
                <div className="z-10 absolute right-0 bottom-0 opacity-25 w-[370px] h-[370px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark transform translate-y-[90px] translate-x-[70px]"></div>
                <div className="z-10 absolute right-1/4 top-0 opacity-25 w-[160px] h-[160px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark flex-center transform -translate-y-[50px]">
                    <div className="bg-grey-900 rounded-full w-[130px] h-[130px]"></div>
                </div>
                <Navbar />
                <Hero />
            </section>
            <section className="bg-grey-800">
                <About />
            </section>
            <section className="">
                <Skills />
            </section>
            <section className="bg-grey-800">
                <Projects />
            </section>
            <section className="">
                <Contact />
                <Footer />
            </section>
        </main>
    );
}

export default App;
