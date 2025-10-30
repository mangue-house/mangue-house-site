import '../global.css'
import Headerv2 from "./components/header/Headerv2.tsx";
import Aside from "./components/aside/Aside.tsx";

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

                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 z-10">
                        <h1 className="text-2xl sm:text-3xl md:text-6xl font-medium leading-snug md:leading-tight text-white text-center max-w-[95vw] md:max-w-3xl">
                            <span className="block">
                              <span className="font-bold text-[#e5103f]">Raízes no código</span>
                              <span className="ml-2 font-normal text-white">soluções</span>
                            </span>
                            <span className="block mt-2">
                              <span className="font-normal text-white">que adaptam</span>
                              <span className="ml-2 font-extrabold text-[#e5103f]">futuro sustentável</span>
                            </span>
                        </h1>
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
                                    Na <b>Mangue House</b>, não apenas codificamos:
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
                                <img src="/app/section_02.png" alt="coding" width={550} height={500}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
