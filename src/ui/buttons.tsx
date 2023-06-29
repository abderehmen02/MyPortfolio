"use client"
import React, { ButtonHTMLAttributes } from 'react'
import { BlodText, Text } from './typography';
import {motion } from 'framer-motion'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;



export const PrimaryBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return     <button {...props} className=" button" >
    {children}
        </button>
}

export const OutlinedBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return    <button {...props} className="px-4 py-2 primaryBtn" >
<div className='DarkBtn' ></div> <BlodText>   {children}</BlodText>
        </button>
}


export const TextButton : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return <button {...props}  className="glow-on-hover" ><BlodText className=''>{children}</BlodText></button>
}
