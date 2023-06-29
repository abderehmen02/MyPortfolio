import { Cormorant_Garamond } from "next/font/google";
import React from "react"

type TextProps = React.HTMLProps<HTMLDivElement>;
const CormorantGaramondObj = Cormorant_Garamond({
  weight : '600' ,
  subsets : ["latin"]
})

const CormorantGaramondBoldObj = Cormorant_Garamond({
  weight : '700' ,
  subsets : ["latin"]
})
const CormorantGaramondLightObj = Cormorant_Garamond({
  weight : '400' ,
  subsets : ["latin"]
})





export const Text: React.FC<TextProps> = ({ className ,children, ...props }) => {
    const FullClassName = className + " "  + CormorantGaramondObj.className
  return <div className={FullClassName} {...props}>{children}</div>;
};


export const LightText: React.FC<TextProps> = ({ className ,children, ...props }) => {
  const FullClassName = className + " "  + CormorantGaramondLightObj.className
return <div className={FullClassName} {...props}>{children}</div>;
};
export const BlodText: React.FC<TextProps> = ({ className ,children, ...props }) => {
  const FullClassName = className + " "  + CormorantGaramondBoldObj.className
return <div className={FullClassName} {...props}>{children}</div>;
};
