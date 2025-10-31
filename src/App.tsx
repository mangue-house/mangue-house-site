import '../global.css'
import Headerv2 from "./components/header/Headerv2.tsx";
import Aside from "./components/aside/Aside.tsx";
import BannerHero from "./components/UI/BannerHero.tsx";

const App = () => {
    return (
        <>

            <main className="h-screen w-screen">
                <Headerv2/>
                <section className="relative h-full w-full overflow-hidden">
                    <video
                        src="/app/banner.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.30]"
                    />

                    <Aside/>

                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 z-10">
                        <BannerHero title={'Da lama ao deploy 🦀'} description={'Conte com a gente para tirar do papel ou sulocionar seu problema'}/>
                    </div>

                </section>

                <div className='w-full h-4 bg-black'></div>

                <section className='md:pl-0 py-6 md:pt-28 bg-primary-03 w-full'>
                    <div className='w-full max-w-[1200px] mx-auto px-6'>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-22'>
                            <div className='flex-col md:w-1/2'>
                                <h2 className='text-white text-5xl md:text-6xl font-bold pb-6'>
                                    Do mangue ao código
                                </h2>
                                <p className='text-white text-[1rem] md:text-2xl'>
                                    Na <b className='bg-gradient-to-l from-red-500 via-red-600 to-blue-700 bg-clip-text text-transparent'>Mangue House</b>, não apenas codificamos:
                                    criamos ecossistemas digitais. Nossos
                                    softwares possuem a resiliência do mangue,
                                    adaptando-se ao seu terreno e criando raízes
                                    fortes para o seu crescimento. Entregamos
                                    soluções interconectadas e vivas, feitas para
                                    durar.
                                </p>
                                <button
                                    className='flex items-center justify-center bg-primary-01 h-10 md:h-16 px-4 py-3 rounded-2xl mt-6'>
                                    <span className='font-bold text-white text-[1rem] md:text-2xl'>Massa, quero conversar!</span>
                                </button>
                            </div>

                            <div className='md:w-1/2'>
                                <img className='pointer-events-none' src="/app/section_02.png" alt="coding" width={550} height={500}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
