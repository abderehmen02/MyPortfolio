"use client"
import React , {useEffect} from "react"

export const sendEmail  = async ( subject : string ,  body : {durration? : number , message? : string})  =>{
 fetch(`${process.env.NEXT_PUBLIC_SEND_MESSAGE_API}/sendMessage` , {
    method : 'POST' ,
        headers : {
            'Content-Type' :  'application/json'
        } ,
body : JSON.stringify({    subject : subject ,...body
}) })
}


export const SendEmailFunctionality: React.FC<{children :  JSX.Element}> = ({children})=>{

// useEffect(()=>{
//     sendEmail( "Visiting Portfolio" , {durration : 0}) 
// } , [] )

return <>
{children}
</>
}