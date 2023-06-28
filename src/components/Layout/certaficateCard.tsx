import { certaficateType } from "@/constants/certaficates"
import { Text } from "@/ui/typography"
import { Oranienbaum } from "next/font/google"

export const CertaficateCard : React.FC<certaficateType> = ({organization , url , companyLogo })=>{
    return <div className="flex flex-col rounded-xl  w-9/12 relative  border-2" >
<img  src={url} className=" w-full rounded-t-xl" />
<div className="px-6 py-6 flex items-center justify-center gap-5 " >
<Text className="w-full font-semibold text-3xl text-center">{organization}</Text>
<img className="w-28 h-28 border-2 rounded-full" src={companyLogo} />
</div>
    </div>
}