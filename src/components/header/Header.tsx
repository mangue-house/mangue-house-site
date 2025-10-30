
const Header = () => {
    return (
        <header className={'rounded-2xl z-50 bg-primary-03 fixed top-6 md:top-14 left-1/2 translate-x-[-50%] flex justify-center w-[90%]  md:justify-between md:px-6 md:w-6xl md:h-26'}>
            <div className={'flex items-center'}>
                <a href="#"><img src="/app/manguinho.svg" className={'pointer-events-none w-8 md:w-14 py-2'} alt="Logo"/></a>
            </div>

            <div className={'hidden md:flex items-center flex-end gap-6'}>
                <a href="#"><h2 className={'text-white'}>Quem somos</h2></a>
                <a href="#"><h2 className={'text-white'}>Membros</h2></a>
                <a href="#"><h2 className={'text-primary-01 font-bold'}>Projetos</h2></a>
            </div>
        </header>
    )
}

export default Header