import { certaficates } from "@/constants/certaficates"
import { CertaficateCard } from "./Layout/certaficateCard"

export const CertaficateSection : React.FC = ()=>{
    return <div  className="flex w-full flex-wrap items-center justify-center">
        {certaficates.map((certaficate) =><CertaficateCard {...certaficate} />)}
    </div>
}