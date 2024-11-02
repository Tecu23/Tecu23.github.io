import { BiLogoTypescript, BiLogoJavascript, BiLogoGoLang, BiTerminal, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
const SkillsCarousel = () => {
    const slides = [
        { icon: <BiLogoHtml5 /> },
        { icon: <BiLogoJavascript /> },
        { icon: <BiLogoReact /> },
        { icon: <BiLogoRedux /> },
        { icon: <BiLogoGoLang /> },
        { icon: <BiLogoTailwindCss /> },
        { icon: <BiLogoCss3 /> },
        { icon: <SiNextdotjs /> },
        { icon: <BiTerminal /> },
        { icon: <BiLogoTypescript /> },
        { icon: <TbBrandFramerMotion /> },
    ];

    const duplicatedSlides = [...slides, ...slides, ...slides];

    return (
        <div className="lg:hidden relative h-[200px] w-full overflow-hidden">
            <h2 className="text-start p-4 heading-5 text-grey-300 ">Tools behind the magic:</h2>
            <motion.div
                className="flex"
                animate={{
                    x: ["-100%", "0%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 10,
                    repeat: Infinity,
                }}
            >
                {duplicatedSlides.map((slide, idx) => (
                    <div key={idx} className="flex-shrink-0" style={{ width: 80 }}>
                        <div className="flex flex-col gap-4 items-center justify-center h-full text-6xl text-grey-100">{slide.icon}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsCarousel;
