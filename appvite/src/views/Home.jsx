import { CarouselDemo } from "../components/Carousel";


export default function Home() {
    return (
        <>
        <main className="grid place-items-center italic font-sans">
            <div className="lg:max-w-4xl xl:max-w-5xl px-2 items-center" >
                <CarouselDemo/>
            </div>
            <div className="flex items-center justify-center space-x-16 max-w-4xl my-8">
                <h2 className="text-5xl font-semibold">About</h2>
                <div className="w-3/4 text-2xl">
                    <p>Floww clothes es una marca de ropa para entrenar minimalista y elegante. 
                    Tenemos un estilo propio que no vas ver en otra lado. Visita nuestro catalogo
                     para ver mas...</p>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-16 max-w-4xl my-8">
            </div>
        </main>
        
        
        </>
        
    )
}