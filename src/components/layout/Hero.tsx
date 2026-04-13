import { Navbar } from "../misc/Navbar"
import heroBurgers from "../../assets/hero-burgers.png"
import { AspectRatio } from "../ui/aspect-ratio"

function Hero() {
  return (
    <div className="flex h-screen w-full flex-col justify-center">
      {/* Header */}
      <Navbar />
      <div className="relative flex w-full flex-1 flex-col items-center justify-evenly lg:mt-16 lg:justify-start">
        <div className="w-full xl:w-[1125px]">
          <p className="text-center font-bowlby text-6xl font-medium md:text-8xl md:leading-22">
            NEW YORK’ FAVORITE ORGANIC SHAMBURGER JOINT
          </p>
        </div>
        <AspectRatio
          ratio={2.8}
          className="flex w-2xl justify-center md:w-5xl xl:absolute xl:top-58 xl:mt-0 xl:w-7xl"
        >
          <img src={heroBurgers} alt="hero-burgers" className="object-cover" />
        </AspectRatio>
      </div>
    </div>
  )
}

export default Hero
