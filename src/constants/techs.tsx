import { ExpressSvg } from "@/ui/logos/expressjs-icon"
import { FigmaSvg } from "@/ui/logos/figmaLogo"
import { MongoDbSvg } from "@/ui/logos/mongodbLogo"
import { MuiSvg } from "@/ui/logos/muiLogo"
import { NextSvg } from "@/ui/logos/next"
import { ReactSvg } from "@/ui/logos/reactLogo"
import { ReduxSvg } from "@/ui/logos/reduxLogo"
import { TailwindSvg } from "@/ui/logos/tailwindLogo"
import { TypescriptSvg } from "@/ui/logos/typescriptLogo"

export interface TechType {
    name : string ,
    logo : JSX.Element
}



export const  MyTechs  : TechType[] = [{
    name :  "React" ,
    logo : <ReactSvg/>
} , {
    name : 'Next JS' ,
    logo : <NextSvg/>
}  , {
    name : "Mui" ,
    logo : <MuiSvg/>
}  , {
    name : 'Tailwind' ,
    logo : <TailwindSvg/>
} , {
    name : "Redux" ,
    logo : <ReduxSvg/>
} ,{
    name : "typescript" ,
    logo : <TypescriptSvg/>
} , {
    name : "mongodb" ,
    logo : <MongoDbSvg/>
} , {
    name : "Express" ,
    logo : <ExpressSvg/>
} , {
    name : "figma" ,
    logo : <FigmaSvg/>
}  ]


