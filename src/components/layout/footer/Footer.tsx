import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <section className="border-t border-grey-800 bg-grey-900">
            <div className="container mx-auto max-w-7xl flex flex-row justify-between items-center sm:px-10 px-5">
                <div className="flex flex-row gap-4 items-center">
                    <p className="paragraph-14 text-grey-300 pr-4">Find me in:</p>
                    <button className="hidden lg:block border-x border-grey-800 text-grey-300 hover:text-white px-4 py-4 ">
                        <FaLinkedin className="w-6 h-6" />
                    </button>
                </div>
                <div className="hidden lg:block border-l border-grey-800 py-4 pl-4">
                    <motion.button initial="initial" animate="initial" whileHover="colored" className="flex flex-row gap-4 items-center">
                        <motion.p
                            variants={{
                                colored: {
                                    color: "#FFFFFF",
                                },
                                initial: {
                                    color: "#B8BBC2",
                                },
                            }}
                            className="paragraph-14 inline-block border-grey-800 border-r"
                        >
                            @Tecu23
                        </motion.p>
                        <FaGithub className="w-6 h-6  text-grey-300" />
                    </motion.button>
                </div>
                <div className="lg:hidden flex gap-4">
                    <button className="border-l border-grey-800 text-grey-300 hover:text-white pl-4 py-4 ">
                        <FaGithub className="w-6 h-6" />
                    </button>
                    <button className="border-l border-grey-800 text-grey-300 hover:text-white pl-4 py-4 ">
                        <FaLinkedin className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Footer;
