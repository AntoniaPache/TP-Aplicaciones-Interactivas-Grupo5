import { CarouselDemo } from "../components/Carousel";
import InfiniteCardSlider from "../components/InfiniteCardSlider";
import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
        <main className="flex flex-wrap justify-center items-start italic font-sans">
        <div className="flex w-3/4 px-2 justify-center items-center" >
            <CarouselDemo/>
        </div>
            <About/>
            <Categorias/>
            <TopSales/>
            <Redes/>
        </main>
        </>
    )
}

export function About() {
    return(
        <div className="flex items-center w-8/12 justify-center space-x-16 my-8">
            <h2 className="text-5xl font-semibold">About</h2>
            <div className="w-3/4 text-xl">
                <p>Floww clothes es una marca de ropa para entrenar minimalista y elegante. 
                Tenemos un estilo propio que no vas ver en otra lado. Visita nuestro catalogo
                para ver mas...</p>
            </div>
        </div>
    );
}

export function Categorias() {
    return(
        <div className="w-3/4 my-8">
            <h2 className="text-5xl mb-10 font-semibold text-[#BF2828]">Categorias</h2>
            <div className="flex justify-center items-center w-full">
                <div className="flex items-center justify-center gap-10">
                    <NavLink to="/hombre"> {/*Hacer esto mismo para las*/}
                        <div className="flex flex-col justify-center items-center">
                            <img className="mb-3 w-3/4 " src="./src/assets/hombre.jpg" alt="hombre" />
                            <h3 className="text-3xl font-normal">Hombre</h3>
                        </div>
                    </NavLink>

                    <div className="flex flex-col justify-center items-center">
                        <img className="mb-3 w-[75.5%] " src="./src/assets/mujer.jpg" alt="Mujer" />
                        <h3 className="text-3xl font-normal">Mujer</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="mb-3 w-3/4 " src="./src/assets/accesorios.jpg" alt="Accesorios" />
                        <h3 className="text-3xl font-normal">Accesorios</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TopSales() {
    const images = [
        "./src/assets/products/hombre/remeraOversizePremiumTeam2.0White.jpg",
        "./src/assets/products/hombre/remeraOversizePremiumTeam2.0Black.jpg",
        "./src/assets/products/hombre/joggingClassicDarkgrey.jpg",
        "./src/assets/products/hombre/buzoPremiumWorldWhite.jpg",
        "./src/assets/products/hombre/buzoPremiumRusticoCrewNeckGreen.jpg",
        "./src/assets/products/hombre/remeraOversizePremiumNascarRoja.jpg",
    ]

    return(
        <>
        <div className="w-3/4">
            <h2 className="text-5xl mb-10 font-semibold text-[#BF2828]">Top Sales</h2>
        </div>
        <div className="w-full mb-12">
            <InfiniteCardSlider images={images}/>
        </div>
        </>
    );
}

export function Redes() {
    return (
        <>
        <div className="w-3/4 mb-10 ">
            <h2 className="text-5xl font-semibold text-[#BF2828]">Redes</h2>
        </div>
      <div className="flex gap-5 mb-12 justify-between items-start px-5 text-4xl font-semibold whitespace-nowrap text-neutral-600 max-md:flex-wrap">
        <div className="flex gap-3">
          <div className="flex-auto my-auto">floww_clothes</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec47afa7cf59bdb7654d6b3d74d40c5543f2dcee87bf78c8f95162bb4e7ed2d?"
            className="pt-2 shrink-0 aspect-square w-[46px]"
          />
        </div>
        <div className="flex gap-2.5 self-stretch my-auto">
          <div className="grow my-auto">floww.clothes</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f62add0c62cf8796fe0809306a50f71bffd321934153b94974e993de59ca8130?"
            className="shrink-0 pt-2 aspect-square w-[46px]"
          />
        </div>
        <div className="flex gap-1.5">
          <div className="grow my-auto">flowwclothes</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/411eac9a068bf88817f5a2fbdbdaa2a90ebdccb60971abfe8dd2e9f1ff93cc8f?"
            className="shrink-0 pt-2 w-12 aspect-square"
          />
        </div>
      </div>
      </>

    );
  }