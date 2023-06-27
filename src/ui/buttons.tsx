import React, { ButtonHTMLAttributes } from 'react'
import { Text } from './typography';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;



export const PrimaryBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return <button {...props} className="px-4 py-2 rounded-3xl   hover:text-white hover:bg-ternary border-ternary border-2 text-ternary" >
{children}
    </button>
}

export const OutlinedBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return <button {...props} className="px-4 py-2 hover:text-ternary " >
{children}
    </button>
}
