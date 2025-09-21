import clsx from "clsx";

import Reveal from "../../shared/Reveal";
import Tooltip from "../../shared/Tooltip";

const Projects = () => {
    const projects = [
        {
            id: 1,
            key: "typedev",
            title: "TypeDev",
            description:
                "Built a high-performance typing test application with React and TypeScript, featuring real-time WPM/accuracy tracking, multiple test modes, and detailed analytics. Implemented custom typing engine with sub-millisecond input latency, visual feedback system, and data visualization using Zustand state management and Tailwind CSS.",
            img: "/projects/typedev.png",
            url: "https://tecu23.github.io/typedev/",
            wip: false,
        },
        {
            id: 1,
            key: "argo",
            title: "ArGO",
            description:
                "Developed a high-performance chess engine featuring alpha-beta search with transposition tables, a 512-neuron neural network evaluation system with custom AMD64 assembly optimizations, and magic bitboard move generation. Achieved competitive playing strength through modern AI techniques including principal variation search, late move reduction, and killer move heuristics.",
            img: "/projects/argo.png",
            url: "https://github.com/Tecu23/argo/releases",
            wip: false,
        },
        {
            id: 1,
            key: "chess_game",
            title: "Chess Game Server (WIP)",
            description:
                "Building a multiplayer chess platform with a custom AI engine. Features include real-time gameplay via WebSockets, minimax algorithm implementation, and move validation. Currently developing both human vs AI and multiplayer modes. ",
            img: "/projects/chess.png",
            wip: true,
        },
    ];

    return (
        <section id="projects" className="bg-grey-800">
            <div className="container mx-auto max-w-7xl common-padding relative z-20">
                <div className="w-full flex flex-col items-center gap-16">
                    <Reveal>
                        <div className="flex gap-2">
                            <h2 className="heading-4 lg:heading-2 text-white">
                                Projects
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
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="w-full flex flex-col lg:flex-row items-center gap-16"
                        >
                            <div
                                className={`${idx % 2 == 1 ? "block lg:hidden" : ""} w-full lg:w-[calc(50%-32px)] flex-shrink-0 flex-grow-0 flex-auto h-[350px] bg-grey-300 rounded py-2 px-1`}
                            >
                                <img
                                    src={project.img}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div
                                className={`flex flex-col justify-center ${idx % 2 == 1 ? "items-start lg:items-end" : "lg:items-start"} flex-shrink flex-grow flex-auto gap-8`}
                            >
                                <Reveal>
                                    <h3 className="heading-3 text-white">
                                        {project.title}
                                    </h3>
                                </Reveal>
                                <Reveal>
                                    <p className="text-lg lg:paragraph-16 text-white">
                                        {project.description}
                                    </p>
                                </Reveal>
                                <div className="relative">
                                    {project.wip ? (
                                        <Tooltip
                                            content="Currently in development"
                                            position="bottom"
                                        >
                                            <button
                                                disabled={project.wip}
                                                className="relative flex items-center gap-4 text-primary-dark cursor-not-allowed"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="108"
                                                    height="24"
                                                    viewBox="0 0 108 24"
                                                    fill="none"
                                                    className={`h-6 w-[68px] ${idx % 2 == 1 ? "lg:block" : ""} hidden`}
                                                >
                                                    <path
                                                        d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM2 13.5L108 13.5L108 10.5L2 10.5L2 13.5Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <p className="heading-5">
                                                    View Project
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="108"
                                                    height="24"
                                                    viewBox="0 0 108 24"
                                                    fill="none"
                                                    className={`h-6 w-[68px] ${idx % 2 == 1 ? "lg:hidden" : ""} `}
                                                >
                                                    <path
                                                        d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97918 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM106 10.5L7.76053e-06 10.5L7.49826e-06 13.5L106 13.5L106 10.5Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </Tooltip>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                window.open(
                                                    project.url,
                                                    "_blank",
                                                )
                                            }
                                            className="relative flex items-center gap-4 text-primary-dark hover:text-primary"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="108"
                                                height="24"
                                                viewBox="0 0 108 24"
                                                fill="none"
                                                className={`h-6 w-[68px] ${idx % 2 == 1 ? "lg:block" : ""} hidden`}
                                            >
                                                <path
                                                    d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM2 13.5L108 13.5L108 10.5L2 10.5L2 13.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <p className="heading-5">
                                                View Project
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="108"
                                                height="24"
                                                viewBox="0 0 108 24"
                                                fill="none"
                                                className={`h-6 w-[68px] ${idx % 2 == 1 ? "lg:hidden" : ""} `}
                                            >
                                                <path
                                                    d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97918 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM106 10.5L7.76053e-06 10.5L7.49826e-06 13.5L106 13.5L106 10.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${idx % 2 == 1 ? "lg:block" : ""} hidden w-full lg:w-[calc(50%-32px)] flex-shrink-0 flex-grow-0 flex-auto h-[350px] bg-grey-300 p-1 rounded`}
                            >
                                <img
                                    src={project.img}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
