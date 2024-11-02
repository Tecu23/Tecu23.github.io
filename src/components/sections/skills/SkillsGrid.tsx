import React from "react";
import { useAnimate } from "framer-motion";
import { Side } from "../../../utils/types";
import { BiLogoTypescript, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const SkillsGrid = () => {
    const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";
    const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0 100%)";
    const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
    const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

    const ENTRANCE_KEYFRAMES = {
        left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        right: [TOP_LEFT_CLIP, NO_CLIP],
    };

    const EXIT_KEYFRAMES = {
        left: [NO_CLIP, TOP_RIGHT_CLIP],
        bottom: [NO_CLIP, TOP_RIGHT_CLIP],
        top: [NO_CLIP, TOP_RIGHT_CLIP],
        right: [NO_CLIP, BOTTOM_LEFT_CLIP],
    };

    const GridItem: React.FC<{ Icon: JSX.Element; href: string }> = ({ Icon, href }) => {
        const [scope, animate] = useAnimate();

        const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
            const side = getNearestSide(e);
            animate(scope.current, {
                clipPath: ENTRANCE_KEYFRAMES[side],
            });
        };
        const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
            const side = getNearestSide(e);

            animate(scope.current, {
                clipPath: EXIT_KEYFRAMES[side],
            });
        };

        const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>): Side => {
            const target = e.target as HTMLAnchorElement;
            const box = target.getBoundingClientRect();

            const proximityToLeft = {
                proximity: Math.abs(box.left - e.clientX),
                side: "left" as Side,
            };

            const proximityToTop = {
                proximity: Math.abs(box.top - e.clientY),
                side: "top" as Side,
            };
            const proximityToRight = {
                proximity: Math.abs(box.right - e.clientX),
                side: "right" as Side,
            };

            const proximityToBottom = {
                proximity: Math.abs(box.bottom - e.clientY),
                side: "bottom" as Side,
            };

            const min = [proximityToRight, proximityToBottom, proximityToTop, proximityToLeft].reduce(
                (min, obj) => {
                    return obj.proximity < min.proximity ? obj : min;
                },
                { proximity: Infinity, side: "left" },
            );

            return min.side;
        };

        return (
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36" href={href}>
                {Icon}

                <div ref={scope} style={{ clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)" }} className="absolute inset-0 grid place-content-center bg-grey-100 text-grey-900">
                    {Icon}
                </div>
            </a>
        );
    };

    return (
        <div className="border divide-y divide-grey-300 border-grey-300 w-full text-white">
            <div className="grid grid-cols-2 divide-x divide-grey-300">
                <GridItem Icon={<BiLogoReact className="w-14 md:w-[80px] h-14 md:h-[80px] stroke-custom" />} href="#skills" />
                <GridItem Icon={<BiLogoTypescript className="h-14 md:h-[80px] w-14 md:w-[80px]" />} href="#skills" />
            </div>
            <div className="grid grid-cols-4 divide-x divide-grey-300">
                <GridItem Icon={<SiNextdotjs className="w-14 md:w-[80px] h-14 md:h-[80px]" />} href="#skills" />
                <GridItem Icon={<BiLogoTailwindCss className="h-14 md:h-[80px] w-14 md:w-[80px]" />} href="#skills" />
                <GridItem Icon={<TbBrandFramerMotion className="w-12 md:w-16 h-12 md:h-16" />} href="#skills" />
                <GridItem Icon={<BiLogoRedux className="w-14 md:w-[80px] h-14 md:h-[80px]" />} href="#skills" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-grey-300">
                <GridItem Icon={<BiLogoHtml5 className="w-14 md:w-[80px] h-14 md:h-[80px]" />} href="#skills" />
                <GridItem Icon={<BiLogoCss3 className="w-14 md:w-[80px] h-14 md:h-[80px]" />} href="#skills" />
                <GridItem Icon={<BiLogoJavascript className="w-14 md:w-[80px] h-14 md:h-[80px]" />} href="#skills" />
            </div>
        </div>
    );
};

export default SkillsGrid;
