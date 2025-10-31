import { useEffect, useState } from "react";
import Container from "../UI/Container.tsx";

import '../../../global.css';

const dados = [
    {
        name: "Thiago",
        lastName: "Henrique",
        subtitle: "Java, JavaScript, React",
        description: "Especialista em ecossistemas robustos com Spring e Java, e interfaces dinâmicas utilizando React e Angular.",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQEzXbcYHlOPkQ/profile-displayphoto-shrink_800_800/B4DZXNKiIEGkAg-/0/1742903846726?e=1763596800&v=beta&t=QsrqddEVm7c8vYYZS1GDqpeCvVcqjGpooVeSGtLb3RA",
        linkedin: "https://www.linkedin.com/in/thiago-henrique-97b559216/"
    },
    {
        name: "Lucas",
        lastName: "Pereira",
        subtitle: "DevOps, Java, Redes",
        description: "Desenvolvedor Java full-stack com experiência na criação de aplicações robustas e escaláveis. Especialista em práticas de DevOps, automação com ferramentas como Jenkins/GitLab.",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQGvr1D7QWtZ9A/profile-displayphoto-crop_800_800/B4DZhTf7btGsAI-/0/1753747536327?e=1763596800&v=beta&t=fh9gCJIoNRaOr3ubVY5aCCLlB_n_lkrPNNq-27CPYbs",
        linkedin: "https://www.linkedin.com/in/geovane-junior/"
    },
    {
        name: "Geovane",
        lastName: "Junior",
        subtitle: "Java, Spring, Angular",
        description: "Desenvolvedor full-stack proficiente na criação de soluções empresariais utilizando a stack moderna. Especialista em Java e no ecossistema Spring.",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQEEcn2WRSTXBg/profile-displayphoto-crop_800_800/B4DZoRrVOVGkAM-/0/1761233163545?e=1763596800&v=beta&t=U7a6ODr24gyeRdi6AQhbLwDG8AkrnfuSiu7iNHS6QYg",
        linkedin: "https://www.linkedin.com/in/lucas1pereiradev/"
    },
];

const SLIDE_DURATION = 3000; // ms

const ContainerStories = () => {
    const [index, setIndex] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setAtivo(true);
        const hide = setTimeout(() => setAtivo(false), SLIDE_DURATION - 500); // Fade antes de trocar
        return () => clearTimeout(hide);
    }, [index]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % dados.length);
        }, SLIDE_DURATION);
        return () => clearTimeout(timer);
    }, [index]);

    const dev = dados[index];

    return (
        <>
            <Container>
                <h2 className="text-primary-02 text-4xl md:text-5xl lg:text-6xl font-bold">
                    Com nosso time fazemos seu projeto em realidade
                </h2>
            </Container>
            <Container>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 flex relative items-end">
                        <img
                            src={dev.img}
                            alt="foto do dev"
                            className={`pointer-events-none rounded-2xl opacity-0 transition-opacity duration-700 ${ativo ? 'opacity-100' : 'opacity-0'}`}
                        />

                        <div className="absolute left-0 bottom-0 w-full h-[16px]">
                            <div
                                key={index}
                                className="h-full bg-primary-01 rounded-bl-2xl rounded-br-2xl animate-storybar"
                                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                            />
                        </div>
                    </div>
                    <div className={`pt-4 flex flex-col justify-between w-full md:w-1/2 pl-4 opacity-0 transition-opacity duration-700 ${ativo ? 'opacity-100' : 'opacity-0'}`}>
                        <div>
                            <h2 className='text-primary-02 text-4xl md:text-6xl font-bold'>
                                {dev.name} <span className='text-primary-01'>{dev.lastName}</span>
                            </h2>
                            <p className='text-primary-02 text-2xl py-4'>{dev.subtitle}</p>
                        </div>
                        <div>
                            <p className='text-primary-02 text-2xl'>{dev.description}</p>
                            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                                <button className='cursor-pointer flex items-center justify-center bg-primary-01 h-10 md:h-16 px-4 py-3 rounded-2xl mt-6'>
                                    <p className='font-bold text-white text-[1rem] md:text-2xl'>Confira meu Linkedin</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ContainerStories;
