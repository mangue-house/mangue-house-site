
interface IFbutton {
    spanButton: string,
    link: string,
    icon?: string
}

const Button = ({spanButton, link, icon}: IFbutton) => {
    return (
        <a href={link}>
            <button className='group w-full min-w-[320px] max-w-[400px] cursor-pointer flex items-center justify-between bg-primary-01 duration-500 transition-colors h-10 md:h-16 px-4 py-3 rounded-2xl mt-6 hover:bg-primary-02'>
                <span className='font-bold transition-opacity duration-800 text-primary-02 group-hover:text-primary-03 text-[1rem] md:text-2xl'>{spanButton}</span>
                {icon && (
                    <img src={icon} className={'w-3 transition-transform duration-300 group-hover:translate-x-2'}  alt={'teste'}/>
                )}
            </button>
        </a>
    )
}

export default Button;
