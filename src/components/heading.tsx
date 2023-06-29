import { Text } from "@/ui/typography"
import { MyAvatar } from "./Layout/svgIcon"
import { OutlinedBtn, PrimaryBtn } from "@/ui/buttons"

export const HomeHeading = ()=>{
  return  <div className="sticky top-0 bg-gray-900 text-white flex w-full  items-center justify-between px-9 py-3  z-50  " >
<div className="h-14 flex relative" > <MyAvatar/></div>
<div className="flex gap-11" >
<OutlinedBtn>See My Code</OutlinedBtn>
<PrimaryBtn>Say Hello</PrimaryBtn>
</div>
    </div>
}