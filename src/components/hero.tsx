import { BlodText, LightText, Text } from "@/ui/typography"
import { MyImg } from "./Layout/myImg"
import { HeroSvg } from "@/ui/logos/HeroSvg"
import { HeroTextAnimation } from "@/ui/animations/HeroText"
import { PrimaryBtn, TextButton } from "@/ui/buttons"
import { HeroTextTyping } from "@/ui/animations/HeroTyping"


export const Hero : React.FC = ()=>{
return <div className="flex flex-col laptop:flex-row bg-black px-6   text-white gap-16  relative  min-h-screen laptop:min-h-fit  py-20 w-full  items-center justify-center">
<div className="flex-col items-center w-full laptop:w-8/12 flex justify-center gap-8 " >
<BlodText className=" text-4xl laptop:text-6xl text-center font-bold text-whiteYellwed w-fit" >Next js , <HeroTextAnimation> Mern Stack </HeroTextAnimation> Developer </BlodText>
<BlodText className=" text-xl laptop:text-2xl h-28  capitalize font-bold w-fit text-center" > 
<HeroTextTyping/>
</BlodText>
<a target="_blank" href="https://drive.google.com/file/d/1Ho--t3RGnsgb0-65ZTVh9pJHennD7vqw/view" ><TextButton>My Resumate   <i className="bi bi-card-heading"></i></TextButton></a>
</div>
<div className="flex laptop:py-12 px-5 text-white laptop:w-4/12 items-center justify-center gap-24"  >
   <HeroSvg/>
</div>
</div>
}