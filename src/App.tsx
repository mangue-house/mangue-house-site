import '../global.css'
import Header from "./components/header/Header.tsx";

const App = () => {
  return (
    <>
      <main className="h-screen w-screen bg-black">
        <Header />
        <section className="relative h-full w-full overflow-hidden">
          <video
            src="/banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.60]"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center px-8 md:px-20 z-10">
            <h1 className="text-3xl md:text-6xl font-medium leading-tight text-white text-center ">
              
              <span className="block md:inline">
                <span className="font-extrabold text-[#e5103f]">Raízes no código</span>
                <span className="md:ml-2 md:mr-2 inline-block md:inline font-normal text-white">soluções</span>
              </span>
              <br />
              <span className="block md:inline mt-2">
                <span className="font-normal text-white">que adaptam</span>
                <span className="md:ml-2 inline-block md:inline font-extrabold text-[#e5103f]">futuro sustentável</span>
              </span>
            </h1>
          </div>
        </section>

        <section className='pt-28 bg-primary-03 w-full'>
                <div className='flex justify-center items-center gap-22'>
                  <div className='flex-col'>
                    <h2 className='text-white text-6xl font-bold pb-6'>
                      Do mangue ao <br /> código
                    </h2>
                    <p className='text-white text-2xl pb-6 '>
                      Na <b>Mangue House</b>, não  apenas codificamos: <br />
                      criamos ecossistemas digitais. Nossos <br />
                      softwares  possuem a resiliência do mangue,<br />
                      adaptando-se ao seu terreno e criando  raízes <br />
                      fortes para o seu crescimento. Entregamos <br />
                      soluções  interconectadas e vivas, feitas para <br />
                      durar.
                    </p>
                    <button className='bg-primary-01 h-16 px-4 rounded-2xl'>
                     <span className='font-bold text-white text-2xl'>Massa, quero conversar!</span> 
                    </button>
                  </div>

                  <div>
                    <img src="../public/session_02.png" alt="" width={550} height={500} />
                  </div>
                </div>
        </section>
      </main>
    </>
  )
}

export default App
