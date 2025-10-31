import type {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return (
        <>
            <section className='max-w-[1100px] h-full mx-auto pt-20 px-4 dm:px-0'>
                {children}
            </section>
        </>
    )
}

export default Container;