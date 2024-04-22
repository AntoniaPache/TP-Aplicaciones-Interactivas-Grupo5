
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="max-w-3xl"   opts={{
        align: "start",
        loop: true,
      }}>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
