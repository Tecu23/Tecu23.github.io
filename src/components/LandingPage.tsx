import Hero from "./Hero";
import Navbar from "./Navbar";

const LandingPage = () => {
    return (
        <section className="overflow-hidden relative z-10 min-h-screen">
            <div className="z-10 absolute left-0 bottom-6 opacity-25 w-[132px] h-[132px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark flex-center transform -translate-x-[32px]">
                <div className="bg-grey-900 rounded-full w-[100px] h-[100px]"></div>
            </div>
            <div className="z-10 absolute left-[15%] top-28 opacity-25 w-[110px] h-[110px] rounded-full blur-lg lg:blur bg-gradient-to-r from-primary to-primary-dark transform rotate-45"></div>
            <div className="block z-10 absolute right-[20%] bottom-1/4 opacity-25 w-[160px] h-[160px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark transform rotate-45"></div>
            <div className="hidden md:block z-10 absolute right-0 bottom-0 opacity-25 w-[370px] h-[370px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark transform translate-y-[90px] translate-x-[70px]"></div>
            <div
                style={{ zIndex: 5 }}
                className="hidden absolute right-1/4 top-0 opacity-25 w-[160px] h-[160px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark lg:flex-center transform -translate-y-[50px]"
            >
                <div className="z-10 bg-grey-900 rounded-full w-[130px] h-[130px] relative"></div>
            </div>
            <Navbar />
            <Hero />
        </section>
    );
};

export default LandingPage;
