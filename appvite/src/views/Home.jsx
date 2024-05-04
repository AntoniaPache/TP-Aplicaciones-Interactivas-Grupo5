import { CarouselDemo } from "../components/Carousel";
import InfiniteCardSlider from "../components/InfiniteCardSlider";

export default function Home() {
    return (
        <>
        <main className="flex flex-wrap justify-center items-start italic font-sans">
            <div className="xl:w-8/12 2xl:w-8/12   px-2 items-center" >
                <CarouselDemo/>
            </div>
            <div className="flex items-center w-1/2 justify-center space-x-16 my-12">
                <h2 className="text-5xl font-semibold">About</h2>
                <div className="w-3/4 text-2xl">
                    <p>Floww clothes es una marca de ropa para entrenar minimalista y elegante. 
                    Tenemos un estilo propio que no vas ver en otra lado. Visita nuestro catalogo
                     para ver mas...</p>
                </div>

            </div>

            <div className="w-3/4 my-12">
                <h2 className="text-5xl mb-10 font-semibold text-[#BF2828]">Categorias</h2>
                <div className="flex justify-center items-center w-full">
                    <div className="flex items-center justify-center space-x-48">
                        <div className="flex flex-col justify-center items-center">
                            <img className="mb-3" src="./src/assets/hombre.jpg" alt="hombre" />
                            <h3 className="text-3xl font-normal">Hombre</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="mb-3" src="./src/assets/mujer.jpg" alt="Mujer" />
                            <h3 className="text-3xl font-normal">Mujer</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="mb-3" src="./src/assets/accesorios.jpg" alt="Accesorios" />
                            <h3 className="text-3xl font-normal">Accesorios</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-3/4">
                <h2 className="text-5xl mb-10 font-semibold text-[#BF2828]">Top Sales</h2>
                <InfiniteCardSlider images={[]}/>
            </div>

        </main>

        
        </>
        
    )
}