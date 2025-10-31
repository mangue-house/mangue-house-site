import { useEffect, useState } from "react";
import '../../../global.css'

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll]);

    return (
        <header
            className={`fixed top-0 z-50 w-full h-11 bg-primary-03/90 backdrop-blur-md transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className='w-full max-w-[1200px] flex justify-center md:justify-between items-center h-full mx-auto'>
                <a href="#"><img src="/app/manguinho.svg" alt="logo" className='w-6 pointer-events-none' /></a>
                <ul className='style-none hidden md:flex md:items-center md:gap-6'>
                    <li><a href="#"><span className='text-primary-02'>Quem somos</span></a></li>
                    <li><a href="#"><span className='text-primary-02'>Membros</span></a></li>
                    <li><a href="#" className='text-primary-01'><span className='font-bold'>Projetos</span></a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
