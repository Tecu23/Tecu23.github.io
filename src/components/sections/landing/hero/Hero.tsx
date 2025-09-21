import { useWindowSize } from "../../../../utils/hooks/useWindowSize";
import Reveal from "../../../shared/Reveal";
import SkillsCarousel from "./SkillsCarousel";
import Snake from "./Snake";

const Hero = () => {
    const [windowWidth] = useWindowSize();

    const handleSmoothScroll = (id: string) => {
        const target = document.getElementById(id);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="z-20 relative container mx-auto max-w-7xl common-padding flex flex-col lg:flex-row justify-around items-start h-full gap-6">
            <div className="w-full flex flex-col items-center lg:items-start justify-start flex-grow flex-shrink flex-auto">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <Reveal>
                            <div className="flex items-start gap-2">
                                <h2 className="heading-4 lg:heading-2 text-white line-clamp-2">
                                    Andrei-Raul Teculescu
                                </h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="29"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                >
                                    <path
                                        d="M22.6976 15.1325L16.2463 12.7575L13.8713 6.30125C13.7307 5.91916 13.4762 5.58941 13.1423 5.35648C12.8083 5.12356 12.411 4.99867 12.0038 4.99867C11.5967 4.99867 11.1993 5.12356 10.8654 5.35648C10.5314 5.58941 10.277 5.91916 10.1363 6.30125L7.75883 12.75L1.30258 15.125C0.920493 15.2656 0.59074 15.5201 0.357814 15.854C0.124888 16.188 0 16.5853 0 16.9925C0 17.3997 0.124888 17.797 0.357814 18.131C0.59074 18.4649 0.920493 18.7194 1.30258 18.86L7.75008 21.25L10.1251 27.7025C10.2657 28.0846 10.5202 28.4143 10.8541 28.6473C11.1881 28.8802 11.5854 29.0051 11.9926 29.0051C12.3997 29.0051 12.7971 28.8802 13.131 28.6473C13.465 28.4143 13.7194 28.0846 13.8601 27.7025L16.2351 21.2512L22.6913 18.8762C23.0734 18.7356 23.4032 18.4811 23.6361 18.1472C23.869 17.8133 23.9939 17.4159 23.9939 17.0088C23.9939 16.6016 23.869 16.2042 23.6361 15.8703C23.4032 15.5364 23.0734 15.2819 22.6913 15.1413L22.6976 15.1325ZM15.5488 19.375C15.2786 19.4742 15.0332 19.631 14.8296 19.8345C14.6261 20.0381 14.4693 20.2835 14.3701 20.5537L11.9951 26.9862L9.62508 20.5487C9.52582 20.2799 9.3695 20.0358 9.16688 19.8332C8.96426 19.6306 8.72014 19.4743 8.45133 19.375L2.01883 17L8.45133 14.625C8.72014 14.5257 8.96426 14.3694 9.16688 14.1668C9.3695 13.9642 9.52582 13.7201 9.62508 13.4513L12.0001 7.01875L14.3751 13.4513C14.4743 13.7215 14.6311 13.9669 14.8346 14.1705C15.0382 14.374 15.2836 14.5308 15.5538 14.63L21.9863 17.005L15.5488 19.375ZM16.0001 4C16.0001 3.73478 16.1054 3.48043 16.293 3.29289C16.4805 3.10536 16.7349 3 17.0001 3H19.0001V1C19.0001 0.734784 19.1054 0.48043 19.293 0.292893C19.4805 0.105357 19.7349 0 20.0001 0C20.2653 0 20.5197 0.105357 20.7072 0.292893C20.8947 0.48043 21.0001 0.734784 21.0001 1V3H23.0001C23.2653 3 23.5197 3.10536 23.7072 3.29289C23.8947 3.48043 24.0001 3.73478 24.0001 4C24.0001 4.26522 23.8947 4.51957 23.7072 4.70711C23.5197 4.89464 23.2653 5 23.0001 5H21.0001V7C21.0001 7.26522 20.8947 7.51957 20.7072 7.70711C20.5197 7.89464 20.2653 8 20.0001 8C19.7349 8 19.4805 7.89464 19.293 7.70711C19.1054 7.51957 19.0001 7.26522 19.0001 7V5H17.0001C16.7349 5 16.4805 4.89464 16.293 4.70711C16.1054 4.51957 16.0001 4.26522 16.0001 4ZM29.0001 10C29.0001 10.2652 28.8947 10.5196 28.7072 10.7071C28.5197 10.8946 28.2653 11 28.0001 11H27.0001V12C27.0001 12.2652 26.8947 12.5196 26.7072 12.7071C26.5197 12.8946 26.2653 13 26.0001 13C25.7349 13 25.4805 12.8946 25.293 12.7071C25.1054 12.5196 25.0001 12.2652 25.0001 12V11H24.0001C23.7349 11 23.4805 10.8946 23.293 10.7071C23.1054 10.5196 23.0001 10.2652 23.0001 10C23.0001 9.73478 23.1054 9.48043 23.293 9.29289C23.4805 9.10536 23.7349 9 24.0001 9H25.0001V8C25.0001 7.73478 25.1054 7.48043 25.293 7.29289C25.4805 7.10536 25.7349 7 26.0001 7C26.2653 7 26.5197 7.10536 26.7072 7.29289C26.8947 7.48043 27.0001 7.73478 27.0001 8V9H28.0001C28.2653 9 28.5197 9.10536 28.7072 9.29289C28.8947 9.48043 29.0001 9.73478 29.0001 10Z"
                                        fill="#82E6AB"
                                    />
                                </svg>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className="heading-5 text-primary/60 self-end">
                                {"Full Stack Developer"}
                            </p>
                        </Reveal>
                    </div>
                    <div className="flex flex-col gap-12 items-center w-full">
                        <Reveal>
                            <p className="px-8 lg:px-0 text-xl lg:text-2xl font-light leading-8 line-clamp-2 text-white text-center lg:text-white">
                                Let's develop your next successful product
                                together!
                            </p>
                        </Reveal>
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <Reveal
                                width={
                                    windowWidth < 1024 ? "100%" : "fit-content"
                                }
                            >
                                <button
                                    onClick={() =>
                                        handleSmoothScroll("projects")
                                    }
                                    className="w-full lg:w-auto h-12 px-5 bg-primary-dark hover:bg-primary rounded-md"
                                >
                                    <p className="text-lg lg:text-[14px] font-semibold tracking-wide text-white">
                                        View My Projects
                                    </p>
                                </button>
                            </Reveal>
                            <Reveal
                                width={
                                    windowWidth < 1024 ? "100%" : "fit-content"
                                }
                            >
                                <button
                                    onClick={() =>
                                        handleSmoothScroll("contact")
                                    }
                                    className="w-full lg:w-auto h-12 px-5 border-primary hover:border-primary-dark rounded-md border"
                                >
                                    <p className="text-lg lg:text-[14px] font-semibold tracking-wide text-primary hover:text-primary-dark">
                                        Contact Me
                                    </p>
                                </button>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <Snake />
            <SkillsCarousel />
        </div>
    );
};

export default Hero;
