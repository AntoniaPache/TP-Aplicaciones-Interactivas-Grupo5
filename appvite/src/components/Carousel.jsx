
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="max-w-5xl justify-center self-center items-center"   opts={{
        loop: true,
      }}>
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
                <img src="src/assets/image.png" alt="Image" className="w-full"/>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
                <img src="src/assets/image.png" alt="Image" className="w-full"/>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
