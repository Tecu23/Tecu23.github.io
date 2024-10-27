import { useState } from "react";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const navigationItems = [
        { title: "About", key: "about" },
        { title: "Projects", key: "projects" },
        { title: "Skills", key: "skills" },
        { title: "Contact", key: "contact" },
    ];

    return (
        <div style={{ zIndex: 40 }} className=" relative container mx-auto max-w-7xl h-[72px] flex justify-between items-center sm:px-10 px-5 z-30">
            <h4 className="heading-4 text-white">Tecu23</h4>
            <button className="lg:hidden" onClick={() => setOpenNavigation(!openNavigation)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path
                        d="M24 9C24 9.26522 23.8946 9.51957 23.7071 9.70711C23.5196 9.89464 23.2652 10 23 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C23.2652 8 23.5196 8.10536 23.7071 8.29289C23.8946 8.48043 24 8.73478 24 9ZM1 2H23C23.2652 2 23.5196 1.89464 23.7071 1.70711C23.8946 1.51957 24 1.26522 24 1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM23 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16Z"
                        fill="white"
                    />
                </svg>
            </button>
            <div className={`${openNavigation ? "flex" : "hidden"} fixed top-[4rem] left-0 right-0 bottom-0 lg:static lg:flex bg-grey-900 lg:bg-transparent`}>
                <nav className="relative flex flex-col lg:flex-row items-center justify-center m-auto gap-6">
                    {navigationItems.map((item) => (
                        <a key={item.key} className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-2">
                            <p className="heading-4 lg:paragraph-16 font-bold">{item.title}</p>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
