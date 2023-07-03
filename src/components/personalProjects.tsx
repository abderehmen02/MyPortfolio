"use client"

import { personalProjectType, personalProjects } from "@/constants/personalProjects"
import { cn } from "@/lib/utils"
import { BlodText, Text } from "@/ui/typography"
import { useState } from "react"

export const PersonalProjects : React.FC  = ()=>{
const [CurrentProject, setCurrentProject] = useState<number>(0)
const project : personalProjectType = personalProjects[CurrentProject]
return <div className="flex items-center px-10 gap-8 py-4  flex-col relative bg-black text-white w-full">
<Text className=" capitalize text-5xl text-primaryLight " >personal projects</Text>
<div  className="flex items-center " >
<div className="flex personalProjectContainer flex-col gap-8 py-5 cursor-cell bg-gray-900 rounded-2xl border-2  w-2/3" >
    <div className="flex px-3 py-3 justify-around items-center" >
    <div className="flex  gap-6 text-2xl " >
 <a href={project.github} target="_blank" >   <i className="bi bi-github hover:text-secondaryDark cursor-pointer"></i></a>
  <a href={project.link} target="_blank" >  <i className="bi bi-box-arrow-up-right hover:text-secondaryDark cursor-pointer"></i></a> 
    </div>
    <div className="flex items-center flex-col" >
    <BlodText className="text-4xl text-primaryLight" >{project.name}</BlodText>
    <Text className="text-xl capitalize text-whiteYellwed" ><i>{project.ShortDescreption}</i></Text>
    </div>
    <img  src={project.logo} className="w-28 h-28 rounded-full" />
    </div>
    <div className="flex gap-3 px-4" >
    <div className="w-2/3 flex pb-6 gap-6 flex-col" >
    <Text className="text-xl longDescriptionProject " >{project.LongDescreption}</Text>

    <div className="gap-3 flex px-4 flex-col" >
    <Text className="text-whiteYellwed text-3xl capitalize" >what i have learned</Text>
    <ul className="list-disc " >
        {project.whatIHaveLearned.map((item , index)=><li key={index} >{item}</li>)}
    </ul></div>

    </div>
    <div style={{ borderLeftWidth : '0.5px' }}  className="w-1/3 flex border-whiteYellwed items-center justify-center flex-col gap-7 shadow-lg " >
    <BlodText className="text-whiteYellwed text-3xl" >Technologies</BlodText>
    <ul className="text-lg    list-disc ps-5" >
        {project.technologies.map(technology=><li key={technology} className="capitalize" >{technology}</li>)}
    </ul></div>

    </div>
    </div>
    <div className="w-1/3 flex gap-10   justify-center   flex-col items-center" >
            <Text className="text-3xl text-primaryLight uppercase text-center" >Projects</Text>
            <ul className=" flex  px-4 flex-col  gap-4  py-6 rounded-xl projectsList w-fit " >
            {personalProjects.map( ( project , index )=><li onClick={()=>setCurrentProject(index)} className={cn(["text-xl   cursor-pointer  text-start"  , {"text-secondaryLight" : personalProjects[CurrentProject].name === project.name  } , { "hover:text-secondaryDark " : personalProjects[CurrentProject].name !== project.name } ])} > <img style={{border: '0.25px solid #fff'}} className="w-7 mx-3 h-7 inline rounded-full" src={project.logo} />    {project.name}  </li>)}
            </ul>
    </div></div></div>
}


// "text-xl hover:text-secondaryDark cursor-pointer  text-start" 