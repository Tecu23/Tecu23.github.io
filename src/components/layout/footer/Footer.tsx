import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <section className="border-t border-grey-800 bg-grey-900">
            <div className="container mx-auto max-w-7xl flex flex-row justify-between items-center sm:px-10 px-5">
                <div className="flex flex-row gap-4 items-center">
                    <p className="paragraph-14 text-grey-300 pr-4">Find me in:</p>
                    <div className="hidden lg:block border-x border-grey-800 text-grey-300 px-4 py-4 ">
                        <FaLinkedin className="w-6 h-6" />
                    </div>
                </div>
                <div className="hidden lg:block border-l border-grey-800 py-4 pl-4">
                    <div className="flex flex-row gap-4 items-center">
                        <p className="paragraph-14 text-grey-100 border-grey-800 border-r">@Tecu23</p>
                        <FaGithub className="w-6 h-6 text-grey-300" />
                    </div>
                </div>
                <div className="lg:hidden flex gap-4">
                    <div className="border-l border-grey-800 text-grey-300 pl-4 py-4 ">
                        <FaGithub className="w-6 h-6" />
                    </div>
                    <div className="border-l border-grey-800 text-grey-300 pl-4 py-4 ">
                        <FaLinkedin className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
