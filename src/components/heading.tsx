import { Text } from "@/ui/typography"
import { MyAvatar } from "./Layout/svgIcon"
import { OutlinedBtn, PrimaryBtn } from "@/ui/buttons"

export const HomeHeading = ()=>{
  return  <div className="sticky top-0  flex w-full border-2 items-center justify-between px-9 py-3 bg-white z-50  border-secondaryDark" >
<div className="h-14 flex relative" > <MyAvatar/></div>
<div className="flex gap-11" >
<OutlinedBtn>See My Code</OutlinedBtn>
<PrimaryBtn>Say Hello </PrimaryBtn>
</div>
    </div>
}