import axios from "axios"
export const sendVisitingEmail  = async (body : {durration? : number , message? : string})  =>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SEND_MESSAGE_API}/sendMessage` , {
    method : 'POST' ,
        headers : {
            'Content-Type' :  'application/json'
        } ,
body : JSON.stringify({    subject : "Visiting Portfolio" ,...body
}) })
}