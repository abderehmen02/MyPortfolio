"use client"
import { MyAvatar } from "./Layout/svgIcon"
import { OutlinedBtn, PrimaryBtn } from "@/ui/buttons"

export const HomeHeading = ()=>{
  return  <div className="sticky top-0  bg-gray-900 text-white flex w-full  items-center justify-between laptop:px-9 py-3  z-50  " >
<div   onClick={()=>window.scrollTo({ 
    top: 0,
    behavior: 'smooth' // Use 'auto' for instant scrolling
  })} className="h-14 cursor-pointer flex  w-20 px-0 relative" > <MyAvatar/></div>
<div className="gap-2 flex laptop:hidden" >
 <a href="#contactForm" className="block text-3xl laptop:hidden text-secondaryLight" ><i className="bi  mx-1 bi-telephone"></i></a>
<a href='https://github.com/abderehmen02' target="_blank"  className="block text-3xl laptop:hidden text-secondaryLight"  > <i className="bi mx-3 mx bi-github"></i></a>
</div>
<div className=" hidden laptop:flex  laptop:gap-11" >
<a   href='https://github.com/abderehmen02' target="_blank" ><OutlinedBtn>See My Code <i className="bi mx-3 mx bi-github"></i> </OutlinedBtn></a>
<a href="#contactForm" > <PrimaryBtn  >Say Hello <i className="bi  mx-1 bi-telephone"></i> </PrimaryBtn></a>
</div>
    </div>
}