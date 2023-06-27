import { HTMLAttributes } from "react"

type MyImgProps = HTMLAttributes<HTMLImageElement>



export const MyImg : React.FC<MyImgProps> = ({className , ...props})=>{
const fullClassName = className + "bg-cover rounded-full bg-center "
    return <img src="/myImg.jpg" className={fullClassName}  ></img>
}