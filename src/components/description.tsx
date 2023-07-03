import { BlodText, Text } from "@/ui/typography"

export const Description = ()=>{
    return <div className="flex flex-col w-full  items-center bg-gray-900 px-3 laptop:px-12 py-20 bg-ternary text-white justify-center gap-7  " >
<BlodText className="text-4xl font-bold text-whiteYellwed" >Hi, I’m Abde Rahmane</BlodText>
<Text>
<ul className="list-disc font-semibold capitalize text-xl ps-5 gap-3 flex flex-col " >
 <li>   i help people build and manage their software apps ussing mern stack and next js  </li>
 <li>   i am passinated about building succesfull projects that generates real value in the future</li>
 <li>   i like writing clean and manageble code ussing typescript   </li>
 <li>   building a great ui and ux is essential for growth and succuss  </li>
</ul>
</Text>
</div>
}