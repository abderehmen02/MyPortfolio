import { certaficates } from "@/constants/certaficates"
import { CertaficateCard } from "./Layout/certaficateCard"
import { BlodText } from "@/ui/typography"

export const CertaficateSection : React.FC = ()=>{
    return <div className="flex flex-col bg-black w-full text-white py-6 items-center justify-center" >
        <BlodText className="text-primaryLight my-12 w-fit text-5xl" >Certaficates</BlodText>
    <div  className="flex w-full flex-wrap items-center justify-center bg-black text-white">
        {certaficates.map((certaficate) =><CertaficateCard key={certaficate.url} {...certaficate} />)}
    </div></div>
}