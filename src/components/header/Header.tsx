
const Header = () => {
    return (
        <header className={'px-6 fixed top-14 left-1/2 translate-x-[-50%] flex justify-between w-[72rem] h-[6.5rem] bg-primary-03 rounded-2xl'}>
            <div className={'flex items-center'}>
                <a href="#"><img src="../../../public/manguinho.svg" className={'pointer-events-none'} width={57} height={54} alt="Logo"/></a>
            </div>

            <div className={'flex items-center flex-end gap-6'}>
                <a href="#"><h2 className={'text-white'}>Quem somos</h2></a>
                <a href="#"><h2 className={'text-white'}>Membros</h2></a>
                <a href="#"><h2 className={'text-primary-01 font-bold'}>Projetos</h2></a>
            </div>
        </header>
    )
}

export default Header