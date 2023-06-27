import { TechType } from "@/constants/techs"
import { Text } from "@/ui/typography"

export const TechSquare : React.FC<TechType> = ({name , logo})=>{
    return <div className="px-6 py-3 border-2 border-secondaryDark bg-whiteYellwed rounded-lg flex items-center flex-col gap-2" >
 <div className="w-32 h-32 rounded-full bg-white border-2 p-5"  >{logo}</div>
<Text className="font-bold text-lg text-secondaryDark  " >{name}</Text>
    </div>
}