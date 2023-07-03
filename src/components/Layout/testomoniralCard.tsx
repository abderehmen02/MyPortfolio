import { TestomonialType } from "@/constants/testomonials"
import { Text } from "@/ui/typography"
import React from "react"

export const TestomonialCard : React.FC<TestomonialType> =  ({email , fullname , message ,phone_number})=>{
return <div style={{width : "400px"}} className="flex flex-col items-center px-4 py-9  bg-black border-2 rounded-xl  border-whiteYellwed gap-6" >
<Text className="text-4xl  capitalize w-wit text-whiteYellwed " >{fullname}</Text>
<Text className="text-lg text-white w-fit text-center" >{message}</Text>
<div className="flex flex-col" >
<p className="text-base text-whiteYellwed" > <i className="bi bi-envelope"></i> {email}</p>
<p className="text-base text-whiteYellwed" > <i className="bi bi-telephone"></i> {phone_number}</p>
</div>
</div>
}