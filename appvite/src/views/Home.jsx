import { CarouselDemo } from "../components/Carousel";

export default function Home() {
    return (
        <>
        <main className="grid place-items-center italic font-sans">
            <div className="">
                <CarouselDemo/>
            </div>
            <div className="flex items-center justify-center space-x-16 w-[60%] my-8">
                <h2 className="text-5xl font-semibold">About</h2>
                <div className="w-3/4 text-xl">
                    <p>Floww clothes es una marca de ropa para entrenar minimalista y elegante. 
                    Tenemos un estilo propio que no vas ver en otra lado. Visita nuestro catalogo
                     para ver mas...</p>
                </div>
             
            </div>
        </main>
        
        
        </>
        
    )
}