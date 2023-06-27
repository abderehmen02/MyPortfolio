"use client"
import { experienceType } from "@/constants/experience";
import { PrimaryBtn } from "@/ui/buttons";
import { Text } from "@/ui/typography";
import React from "react";

export const ExperienceCard : React.FC<experienceType> = ({title , company , technologies  , url , logo })=>{
    return <div className="flex flex-col w-1/3   border-2 rounded-xl  " >
<img src={logo} className="w-full h-80 border-b-2 " />
<div className="flex py-4 flex-col px-11 gap-7  items-center" >
<div className="flex flex-col gap-3 py-6" >
<Text className="text-center text-4xl font-semibold" >{company}</Text>
<Text className="text-center text-lg text-secondaryDark font-bold" >{title}</Text>
</div>
<ul className="list-disc capitalize font-semibold" >
{
    technologies.map(tech =><li>{tech}</li> )
}
</ul>
<PrimaryBtn className="px-4 w-full" onClick={()=>window.open(url)}>See Website</PrimaryBtn>

</div>   
 </div>
}