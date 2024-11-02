import { useRef, useState } from "react";
import MenuButton from "./ui/MenuButton";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const navigationItems = [
        { title: "About", key: "about" },
        { title: "Projects", key: "projects" },
        { title: "Skills", key: "skills" },
        { title: "Contact", key: "contact" },
    ];

    return (
        <div style={{ zIndex: 40 }} className="relative container mx-auto max-w-7xl h-[72px] flex justify-between items-center sm:px-10 px-5 z-30">
            <h4 className="heading-4 text-white z-10">Tecu23</h4>
            <MenuButton items={navigationItems} active={openNavigation} setActive={setOpenNavigation} />
            {/*<div className={`${openNavigation ? "flex" : "hidden"} fixed top-[4rem] left-0 right-0 bottom-0 lg:static lg:flex bg-grey-900 lg:bg-transparent`}>
                <nav className="relative flex flex-col lg:flex-row items-center justify-center m-auto gap-6">
                    {navigationItems.map((item) => (
                        <a
                            onClick={() => handleSmoothScroll(item.key)}
                            key={item.key}
                            href={`#${item.key}`}
                            className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-2"
                        >
                            <p className="heading-4 lg:paragraph-16 font-bold">{item.title}</p>
                        </a>
                    ))}
                </nav>
            </div>*/}
        </div>
    );
};

export default Navbar;
