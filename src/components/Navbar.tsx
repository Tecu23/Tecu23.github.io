const Navbar = () => {
    return (
        <nav className="container mx-auto max-w-7xl h-[72px] flex justify-between items-center sm:px-10 px-5 z-20">
            <h4 className="heading-4 text-white">Tecu23</h4>
            <div className="flex justify-end items-center gap-6">
                <a className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-4">
                    <p className="paragraph-16 font-bold">About</p>
                </a>
                <a className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-4">
                    <p className="paragraph-16 font-bold">Skills</p>
                </a>
                <a className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-4">
                    <p className="paragraph-16 font-bold">Projects</p>
                </a>
                <a className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary p-4">
                    <p className="paragraph-16 font-bold">Contact</p>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
