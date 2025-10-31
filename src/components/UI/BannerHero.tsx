import {useEffect, useState} from "react";

interface TesteInterface {
    title: string,
    description: string
}

const BannerHero = ({title, description}: TesteInterface) => {

    const [ativo, setAtivo] = useState(false)

    useEffect(() => {
        setAtivo(true)
    }, [])

    return (
        <>
            <h1 className={`bg-gradient-to-l from-red-500 via-red-600 to-blue-700 bg-clip-text text-transparent text-8xl opacity-0 transition-opacity duration-700 ${ativo ? 'opacity-100' : 'opacity-0'}`}>{title}</h1>
            <p className='text-primary-02 text-2xl'>{description}</p>
        </>
    )
}

export default BannerHero;