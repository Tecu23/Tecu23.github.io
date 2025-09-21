import {
    motion,
    MotionConfig,
    stagger,
    useAnimate,
    AnimatePresence,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";
import { NavItem } from "../../../utils/types";

type Props = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    items: NavItem[];
};

const MobileNavbar = ({ active, setActive, items }: Props) => {
    const [scope, animate] = useAnimate();

    const [windowWidth] = useWindowSize();

    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (windowWidth == 0) {
            return;
        }
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const main = document.querySelector("#main");

        if (active) {
            setIsAnimating(true);
            const handleOpen = async () => {
                main?.classList.add("overflow-hidden");
                await animate("#background", {
                    width: "100vw",
                    height: "100vh",
                    right: 0,
                    top: 0,
                });
                await animate("h4", { opacity: 1, y: 0, filter: "blur(0px)" });
                await animate(
                    "a",
                    //@ts-expect-errors; this is not an error, but typescript sees it as one
                    { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
                    { delay: stagger(0.25), at: "-0.1" },
                );
                setIsAnimating(false);
            };
            handleOpen();
        } else {
            setIsAnimating(true);
            const handleClose = async () => {
                await animate(
                    "a",
                    //@ts-expect-errors; this is not an error, but typescript sees it as one
                    { opacity: 0, y: -20, filter: "blur(10px)", scale: 0.5 },
                    { delay: stagger(0.25), at: "-0.1" },
                );
                await animate("h4", {
                    opacity: 0,
                    y: -20,
                    filter: "blur(10px)",
                });
                await animate("#background", {
                    width: 48,
                    height: 48,
                    right: windowWidth < 640 ? 20 : 40,
                    top: 8,
                });
                main?.classList.remove("overflow-hidden");

                if (scrollTarget) {
                    const targetSection = document.getElementById(scrollTarget);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    } else {
                        console.log("Target section not found: ", scrollTarget);
                    }

                    setScrollTarget(null);
                }
                setIsAnimating(false);
            };
            handleClose();
        }
    }, [active, animate, scrollTarget, windowWidth]);

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string,
    ) => {
        e.preventDefault();
        setScrollTarget(sectionId);
        setActive(false);
    };

    const shouldShowElements = active || isAnimating;

    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.div ref={scope} className="">
                <AnimatePresence>
                    {shouldShowElements ? (
                        <motion.div
                            style={{
                                width: 48,
                                height: 48,
                                right: windowWidth < 640 ? 20 : 40,
                                top: 8,
                            }}
                            id="background"
                            initial={{ width: 48, height: 48 }}
                            exit={{
                                width: 48,
                                height: 48,
                                right: windowWidth < 640 ? 20 : 40,
                                top: 8,
                            }}
                            className="lg:hidden absolute bg-grey-900 rounded-lg z-10"
                        ></motion.div>
                    ) : null}
                </AnimatePresence>
                <motion.button
                    initial={false}
                    onClick={() => setActive((prev) => !prev)}
                    className="lg:hidden relative h-12 w-12 rounded-lg transition-colors bg-white/0 hover:bg-white/20 z-50"
                    animate={active ? "open" : "close"}
                >
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%",
                        }}
                        className="absolute h-[3px] w-6 bg-white"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "45deg"],
                                top: ["35%", "50%", "50%"],
                            },
                            close: {
                                rotate: ["45deg", "0deg", "0deg"],
                                top: ["50%", "50%", "35%"],
                            },
                        }}
                    />
                    <motion.span
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%",
                        }}
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "-45deg"],
                            },
                            close: {
                                rotate: ["-45deg", "0deg", "0deg"],
                            },
                        }}
                        className="absolute h-[3px] w-6 bg-white"
                    />
                    <motion.span
                        style={{
                            left: "50%",
                            bottom: "35%",
                            x: "-50%",
                            y: "50%",
                        }}
                        variants={{
                            open: {
                                bottom: ["35%", "50%", "50%"],
                                opacity: [1, 1, 0],
                            },
                            close: {
                                bottom: ["50%", "50%", "35%"],
                                opacity: [0, 1, 1],
                            },
                        }}
                        className="absolute h-[3px] w-6 bg-white"
                    />
                </motion.button>
                <AnimatePresence>
                    {shouldShowElements && (
                        <motion.h4
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-4 left-10 heading-4 text-white z-10"
                        >
                            Tecu23
                        </motion.h4>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {shouldShowElements && (
                        <motion.nav className="fixed lg:hidden left-8 top-20 z-40 h-full w-full overflow-hidden bg-transparent">
                            <motion.div
                                id="nav-links"
                                className="space-y-8 p-20 pl-4 md:pl-20"
                            >
                                {items.map((item) => (
                                    <motion.a
                                        key={item.key}
                                        onClick={(e) => {
                                            handleScroll(e, item.key);
                                        }}
                                        style={{
                                            opacity: 0,
                                            transform: "translateY(-20px)",
                                        }}
                                        href={`#${item.key}`}
                                        className="block text-primary transition-colors hover:text-violet-50 md:text-7xl"
                                    >
                                        <p className="heading-3 lg:paragraph-16 font-bold">
                                            {item.title}
                                        </p>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </MotionConfig>
    );
};

export default MobileNavbar;
