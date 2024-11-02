import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const navigationItems = [
        { title: "About", key: "about" },
        { title: "Skills", key: "skills" },
        { title: "Projects", key: "projects" },
        { title: "Contact", key: "contact" },
    ];

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
        <div style={{ zIndex: 40 }} className="relative container mx-auto max-w-7xl h-[72px] flex justify-between items-center sm:px-10 px-5 z-30">
            <h4 className="heading-4 text-white z-10">Tecu23</h4>
            <MobileNavbar items={navigationItems} active={openNavigation} setActive={setOpenNavigation} />
            <div className={`hidden static lg:flex bg-grey-900 bg-transparent`}>
                <nav className="relative flex flex-row items-center justify-center m-auto gap-6">
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
            </div>
        </div>
    );
};

export default Navbar;
