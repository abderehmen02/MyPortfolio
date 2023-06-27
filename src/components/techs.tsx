import { MyTechs } from "@/constants/techs"
import { TechSquare } from "./Layout/techSquare"
import { Text } from "@/ui/typography"

export const TechsSection = ()=>{
return <div className="flex flex-col gap-4 my-8 items-center" >
    <Text className="text-4xl  w-fit text-center font-bold" >Technologies</Text>
      <div className="flex w-11/12   gap-5 items-center justify-center py-4 flex-wrap " >     {
        MyTechs.map(tech =><TechSquare {...tech} />)
    }
</div>
</div>}