"use client"
import { experienceType } from "@/constants/experience";
import { PrimaryBtn } from "@/ui/buttons";
import { BlodText, Text } from "@/ui/typography";
import React from "react";
import {motion} from "framer-motion"

export const ExperienceCard : React.FC<experienceType> = ({title , company , technologies  , url , logo })=>{
    return <div className="relative w-1/3" ><motion.div initial={{bottom: '0px'}} whileHover={{bottom : '20px'}}  className="flex relative  cursor-cell flex-col w-full bg-white text-black rounded-t-xl  border-gray-700 rounded-xl  " >
<img src={logo} className="w-full h-80 border-b-gray-900 rounded-t-xl border-b-2" />
<div className="flex py-4 flex-col px-11 gap-7  items-center" >
<div className="flex flex-col gap-3 py-6" >
<BlodText className="text-center text-4xl font-semibold" >{company}</BlodText>
<Text className="text-center text-lg text-secondaryDark font-bold" >{title}</Text>
</div>
<ul className="list-disc capitalize " >
        {
    technologies.map(tech =><li>{tech}</li> )
}
</ul>
<a href={url} target="_blank" ><PrimaryBtn className="px-4 w-full" >See Website</PrimaryBtn></a>

</div>   
 </motion.div>
 </div>}