import { myExperiences } from "@/constants/experience"
import { Text } from "@/ui/typography"
import { ExperienceCard } from "./Layout/experienceCard"
import exp from "constants"

export const ExperienceSection : React.FC = ()=>{
return <div  className="flex py-10 flex-col w-full items-center justify-center  gap-14 bg-black text-white" >
    <Text className="text-5xl font-semibold text-primaryLight text-center" > My Experience </Text>
    <div className="flex flex-col px-3 laptop:flex-row gap-6 w-full  justify-center" >
{myExperiences.map((experience) =>{
    return <ExperienceCard key={experience.title} {...experience} />
})}
    </div>
</div>
}