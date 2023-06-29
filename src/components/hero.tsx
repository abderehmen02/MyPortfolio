import { BlodText, LightText, Text } from "@/ui/typography"
import { MyImg } from "./Layout/myImg"
import { HeroSvg } from "@/ui/logos/HeroSvg"
import { HeroTextAnimation } from "@/ui/animations/HeroText"
import { PrimaryBtn, TextButton } from "@/ui/buttons"


export const Hero : React.FC = ()=>{
return <div className="flex bg-black px-6   text-white gap-16 border-2 relative h-screen  py-20 w-full  items-center justify-center">
<div className="flex-col items-center w-8/12 flex justify-center gap-8 border-2" >
<BlodText className="text-6xl text-center font-bold w-fit" >Next js , <HeroTextAnimation> Mern Stack </HeroTextAnimation> Developer </BlodText>
<BlodText className="text-2xl  capitalize font-bold w-fit text-center" > turning websites into real products is my calling </BlodText>
<TextButton>My Resumate   <i className="bi bi-card-heading"></i></TextButton>
</div>
<div className="flex py-12 px-5 text-white w-4/12 items-center justify-center gap-24"  >
   <HeroSvg/>
</div>
</div>
}