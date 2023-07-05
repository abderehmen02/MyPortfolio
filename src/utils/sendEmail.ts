export const sendEmail  = async ( subject : string ,  body : {durration? : number , message? : string})  =>{
 fetch(`${process.env.NEXT_PUBLIC_SEND_MESSAGE_API}/sendMessage` , {
    method : 'POST' ,
        headers : {
            'Content-Type' :  'application/json'
        } ,
body : JSON.stringify({    subject : subject ,...body
}) })
}