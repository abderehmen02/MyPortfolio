import { Text } from "@/ui/typography"
import { MyImg } from "./Layout/myImg"


export const Hero : React.FC = ()=>{
return <div className="flex gap-14 border-2 relative border-primaryDark flex-col h-fit py-20 w-full  items-center justify-center">
<div className="flex-col items-center flex justify-center gap-4" >
<Text className="text-4xl text-center font-bold w-fit" >Full Stack Developer , Next js  | Mern Stack Developer </Text>
<Text className="text-2xl w-fit text-center" >I build comprehensive web apps that generates value </Text>
</div>
<div className="flex w-full items-center justify-center gap-24"  >
<img src="/computerSvg.png"  className="h-60" />
<img src="/programerSvg.png"  className="h-60" />
</div>
</div>
}