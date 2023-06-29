"use client"

import {motion} from "framer-motion"
export const HeroTextAnimation : React.FC<{children : string}> = ({children})=>{
return <motion.span animate={{color : ["#24E713"  , "#FF3DB5" , "#FF3DB5" ]}}  transition={{duration : 5 , ease : 'easeIn' , repeat : Infinity}} >
    {children}
</motion.span>
}