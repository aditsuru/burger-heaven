import { Button } from "../ui/button"
import { AspectRatio } from "../ui/aspect-ratio"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import restaurantLive from "../../assets/restaurant-live.png"
import linesSvg from "../../assets/lines-svg.png"
import { Field, FieldLabel } from "../ui/field"

const message = "the best burger i’ve ever had".split(" ")

function GetStarted() {
  return (
    <div className="relative mt-8 w-full overflow-hidden lg:mt-16">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="my-8 flex w-max animate-[marquee_20s_linear_infinite] gap-8">
          {[...message, ...message].map((item, i) => (
            <span
              key={i}
              className="font-bowlby text-6xl text-primary uppercase md:text-9xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <AspectRatio ratio={1340 / 503} className="p-8 md:py-16 lg:p-16">
          <img
            src={restaurantLive}
            alt="restaurant-live"
            className="w-full object-cover"
          />
        </AspectRatio>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-16 py-8 lg:py-32">
        <div className="w-md md:w-2xl lg:w-5xl xl:w-7xl">
          <h2 className="text-center font-bowlby text-5xl uppercase md:text-6xl lg:text-8xl">
            order online or come visit us today
          </h2>
        </div>
        <div>
          <Button
            variant="link"
            className="bg-primary p-8 font-bowlby text-xl text-background uppercase transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* Footer */}
      <div className="z-20 w-full p-16">
        <div className="rounded-4xl bg-secondary-foreground p-8 text-background md:px-24 lg:p-16">
          <div className="flex flex-col justify-center gap-8 md:justify-evenly md:gap-16 lg:flex-row lg:gap-24 xl:gap-32">
            <div className="flex flex-1 justify-between gap-8">
              <h3 className="font-bowlby text-lg font-bold uppercase md:text-3xl">
                Burger Heaven
              </h3>
              <div className="flex flex-col items-start">
                <p className="font-bowlby text-xl font-bold uppercase">More</p>
                <div className="mt-2 flex flex-col items-start gap-2">
                  <Button
                    variant="link"
                    className="text-md h-auto! p-0 text-lg font-bold text-background"
                  >
                    About
                  </Button>
                  <Button
                    variant="link"
                    className="text-md h-auto! p-0 text-lg font-bold text-background"
                  >
                    Menu
                  </Button>
                  <Button
                    variant="link"
                    className="text-md h-auto! p-0 text-lg font-bold text-background"
                  >
                    Locations
                  </Button>
                  <Button
                    variant="link"
                    className="text-md h-auto! p-0 text-lg font-bold text-background"
                  >
                    Privacy
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-md font-bowlby text-xl font-bold uppercase">
                  Hours
                </p>
                <div className="mt-2 flex flex-col items-start gap-2">
                  <p className="text-md text-lg font-bold text-background">
                    Open from
                  </p>
                  <p className="text-md text-lg font-bold text-background">
                    11AM to
                  </p>
                  <p className="text-md text-lg font-bold text-background">
                    11PM daily
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Field className="lg:w-xs xl:w-lg">
                <FieldLabel
                  htmlFor="inline-end-input"
                  className="mb-4 font-bowlby text-xl font-bold uppercase"
                >
                  Join our newsletter
                </FieldLabel>
                <InputGroup className="rounded-lg border-background p-8!">
                  <InputGroupInput
                    className="pr-8! text-lg! font-bold! text-background!"
                    type="email"
                  />
                  <InputGroupAddon align="inline-end">
                    <Button
                      className="bg-transparent! p-0 font-bowlby text-xl text-background! uppercase"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
          </div>
          <div className="mt-8 flex w-full justify-between lg:px-8">
            <p className="text-sm font-medium lg:font-extrabold">Copyright Burger Heaven</p>
            <p className="text-sm font-medium lg:font-extrabold">Privacy Policy</p>
          </div>
        </div>
        <img
          src={linesSvg}
          alt="lines-svg"
          className="absolute top-1/3 left-[-10px] z-10 w-full object-cover sm:top-3/7"
        />
      </div>
    </div>
  )
}

export default GetStarted
