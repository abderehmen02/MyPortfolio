import { MyTechs } from "@/constants/techs"
import { TechSquare } from "./Layout/techSquare"
import { Text } from "@/ui/typography"

export const TechsSection = ()=>{
return <div className="flex flex-col  gap-4 py-12 items-center bg-black text-white" >
    <Text className="text-5xl  w-fit text-center font-semibold text-primaryLight" >Technologies</Text>
      <div className="flex w-11/12   gap-2 laptop:gap-5 items-center justify-center py-4 flex-wrap " >     {
        MyTechs.map(tech =><TechSquare key={tech.name} {...tech} />)
    }
</div>
</div>}