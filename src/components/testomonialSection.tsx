import { Testomonials } from "@/constants/testomonials"
import { TestomonialCard } from "./Layout/testomoniralCard"
import { Text } from "@/ui/typography"



export const TestomonialSection : React.FC = ()=>{
    return <div className="bg-black flex py-6 items-center gap-9 justify-center flex-col w-full" >
        <Text className="text-5xl text-primaryLight " >Testomonials</Text>
        {
            Testomonials.map(testomonial=><TestomonialCard key={testomonial.email} {...testomonial} />)
        }
    </div>
}