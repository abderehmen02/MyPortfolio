"use client"

import { TechType } from "@/constants/techs"
import { Text } from "@/ui/typography"
import {motion} from 'framer-motion'
export const TechSquare : React.FC<TechType> = ({name , logo})=>{
    return <div className="relative" >
    <motion.div initial={{bottom : "0px"}}  transition={{ease : 'easeIn'}} whileHover={{bottom : '10px'}} className=" px-2 laptop:px-6 relative laptop:py-3  border-secondaryDark bg-whiteYellwed rounded-3xl py-1 flex items-center flex-col laptop:gap-2 cursor-cell w-20 laptop:w-fit" >
 <div className="w-16 h-16 laptop:w-32 laptop:h-32 rounded-full bg-white border-2 flex items-center justify-center p-1 laptop:p-5"  >{logo}</div>
<Text className="font-bold text-lg text-secondaryDark  " >{name}</Text>
    </motion.div>
    </div>}