import React from "react";

import { BiLogoTypescript, BiLogoJavascript, BiLogoGoLang, BiTerminal, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { motion } from "framer-motion";

const SkillsCarousel = () => {
    const slides = [
        { icon: <BiLogoHtml5 className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoJavascript className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoReact className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoRedux className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoGoLang className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoTailwindCss className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoCss3 className="h-12 w-12 text-grey-200" /> },
        { icon: <SiNextdotjs className="h-12 w-12 text-grey-200" /> },
        { icon: <BiTerminal className="h-12 w-12 text-grey-200" /> },
        { icon: <BiLogoTypescript className="h-12 w-12 text-grey-200" /> },
        { icon: <TbBrandFramerMotion className="h-12 w-12 text-grey-200" /> },
    ];

    const duplicatedSlides = [...slides];

    return (
        <div className="lg:hidden relative h-[150px] w-full">
            <h2 className="text-center paragraph-16 text-grey-300 ">Tools behind the magic:</h2>
            <div className="flex relative overflow-visible">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{
                        x: ["-50%", "0%"],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity,
                    }}
                    className="flex flex-none gap-16 pr-16"
                >
                    {[...new Array(2)].fill(0).map((_, idx) => (
                        <React.Fragment key={idx}>
                            {duplicatedSlides.map((slide, idx) => (
                                <div key={idx} className="h-12 w-auto flex-none">
                                    {slide.icon}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsCarousel;
