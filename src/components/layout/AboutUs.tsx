import { Button } from "../ui/button"

function AboutUs() {
  return (
    <div className="w-full px-16">
      <div className="flex flex-col justify-center gap-8 rounded-4xl bg-primary p-16 text-background lg:flex-row lg:p-24">
        <h1 className="font-bowlby text-4xl uppercase lg:text-6xl">
          The burgers above all burgers
        </h1>
        <div className="flex flex-col items-start gap-8">
          <p className="max-w-7xl text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fuga
            architecto eos nam, vero maiores nihil temporibus. Autem, obcaecati
            nulla? Repudiandae voluptas nisi iusto ab saepe doloribus sequi
            numquam dicta.
          </p>

          <Button
            variant="ghost"
            className="border-4! border-background! bg-foreground! px-8 py-6 font-bowlby text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:text-background! active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            ABOUT US
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
