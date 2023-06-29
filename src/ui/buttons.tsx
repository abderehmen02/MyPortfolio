"use client"
import React, { ButtonHTMLAttributes } from 'react'
import { BlodText, Text } from './typography';
import {motion } from 'framer-motion'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;



export const PrimaryBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return       <button {...props} className="px-4 py-2 text-primaryLight border-2 border-primaryLight   hover:border-primaryDark  hover:bg-primaryDark hover:text-white rounded-2xl  relative primaryBtn" >
    <div className='darkPrimary' ></div>   {children}
            </button> 
}

export const OutlinedBtn : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return    <button {...props} className="px-4 py-2 hover:text-secondaryLight" >
<div className='DarkBtn' ></div>    {children}
        </button>
}


export const TextButton : React.FC<ButtonProps> = ({children , className , ...props})=>{
    return <button {...props}  className="glow-on-hover" >{children}</button>
}
