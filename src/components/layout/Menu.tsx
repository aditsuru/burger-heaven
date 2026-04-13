import { AspectRatio } from "../ui/aspect-ratio"

import menuItem1 from "../../assets/menu-item-1.png"
import menuItem2 from "../../assets/menu-item-2.png"
import { Button } from "../ui/button"

const menuItems = [
  {
    src: menuItem1,
    alt: "menu-item-1",
    itemName: "salt & vinegar french fries",
  },
  {
    src: menuItem2,
    alt: "menu-item-2",
    itemName: "crispy chicken sandwich",
  },
]

function Menu() {
  return (
    <div className="mt-16 grid w-full gap-8 px-16 lg:mt-16 lg:grid-cols-2">
      {menuItems.map((item) => (
        <AspectRatio
          key={item.alt}
          ratio={650 / 753}
          className="relative col-span-1 rounded-4xl"
        >
          <img src={item.src} alt={item.alt} className="h-full object-cover" />
          <div className="absolute bottom-0 left-0 flex w-full flex-col items-start justify-center rounded-t-4xl bg-background p-4 font-bowlby text-foreground lg:bottom-10 lg:left-10 lg:w-[70%] lg:rounded-4xl lg:p-8">
            <h2 className="text-2xl uppercase lg:text-4xl xl:text-5xl">
              {item.itemName}
            </h2>
            <Button
              variant="link"
              className="px-0! font-bold text-secondary-foreground uppercase lg:py-8 lg:text-xl"
            >
              Order Online
            </Button>
          </div>
        </AspectRatio>
      ))}
    </div>
  )
}

export default Menu
