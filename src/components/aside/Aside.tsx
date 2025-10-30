import {useEffect, useState} from "react";

const Aside = () => {

    const [showAside, setShowAside] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setShowAside(false);
            } else {
                setShowAside(true);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll]);

    return (
        <aside className={`ml-4 w-10 md:w-16 fixed left-0 bottom-0 md:top-1/2 -translate-y-1/2 transition-transform duration-300 flex items-center justify-center z-30 ${showAside ? "translate-x-0" : "-translate-x-[1200px]"}`}>
            <div className="flex flex-col gap-4 md:gap-6 w-full items-center justify-center py-4 bg-primary-03 rounded-2xl">
                <a href="https://www.linkedin.com/in/geovane-junior/" target={'_blank'}>
                    <img className='h-6 md:h-10 rounded-full' src="https://media.licdn.com/dms/image/v2/D4D03AQEEcn2WRSTXBg/profile-displayphoto-crop_800_800/B4DZoRrVOVGkAM-/0/1761233163545?e=1763596800&v=beta&t=U7a6ODr24gyeRdi6AQhbLwDG8AkrnfuSiu7iNHS6QYg" alt="Geovane Junior"/>
                </a>

                <a href="https://www.linkedin.com/in/lucas1pereiradev/" target={'_blank'}>
                    <img className='h-6 md:h-10 rounded-full' src="https://media.licdn.com/dms/image/v2/D4D03AQGvr1D7QWtZ9A/profile-displayphoto-crop_800_800/B4DZhTf7btGsAI-/0/1753747536327?e=1763596800&v=beta&t=fh9gCJIoNRaOr3ubVY5aCCLlB_n_lkrPNNq-27CPYbs" alt="Geovane Junior"/>
                </a>

                <a href="https://www.linkedin.com/in/thiago-henrique-97b559216/" target={'_blank'}>
                    <img className='h-6 md:h-10 rounded-full' src="https://media.licdn.com/dms/image/v2/D4D03AQEzXbcYHlOPkQ/profile-displayphoto-shrink_800_800/B4DZXNKiIEGkAg-/0/1742903846726?e=1763596800&v=beta&t=QsrqddEVm7c8vYYZS1GDqpeCvVcqjGpooVeSGtLb3RA" alt="Geovane Junior"/>
                </a>
            </div>
        </aside>
    )
}

export default Aside
