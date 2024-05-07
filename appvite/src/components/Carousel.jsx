import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

export function CarouselDemo() {
  const [sliders, showSliders] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        showSliders(false);
      } else {
        showSliders(true);
      }
    }

    // Call the function once to set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    

    
    <Carousel  opts={{
        loop: true,
      }} plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}>
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
                <img src="src/assets/image.png" alt="Image" className=""/>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
                <img src="src/assets/image.png" alt="Image" className=""/>
            </div>
          </CarouselItem>
      </CarouselContent>
      {sliders ? (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      ) : null}
    </Carousel>
  )
}
