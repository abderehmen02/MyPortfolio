"use client"

import { TechType } from "@/constants/techs"
import { Text } from "@/ui/typography"
import {motion} from 'framer-motion'
export const TechSquare : React.FC<TechType> = ({name , logo})=>{
    return <div className="relative" >
    <motion.div initial={{bottom : "0px"}}  transition={{ease : 'easeIn'}} whileHover={{bottom : '10px'}} className="px-6 relative py-3  border-secondaryDark bg-whiteYellwed rounded-3xl flex items-center flex-col gap-2 cursor-cell" >
 <div className="w-32 h-32 rounded-full bg-white border-2 p-5"  >{logo}</div>
<Text className="font-bold text-lg text-secondaryDark  " >{name}</Text>
    </motion.div>
    </div>}