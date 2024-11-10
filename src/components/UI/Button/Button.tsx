'use client';
import { ButtonHTMLAttributes } from "react";
import style from './Button.module.scss'
import classNames from "classnames"; 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    href?: string;  
}


export default function Button(props: ButtonProps){
    const {children, className ,...propsElement} = props
    
    return(
        <button {...propsElement} className={classNames(style.btn, className)}>
            {children}
        </button>
    )
} 