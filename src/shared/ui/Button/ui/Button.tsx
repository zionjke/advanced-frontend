import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}

export const Button:FC<ButtonProps> = ({
    children, className, theme, ...rest
}: ButtonProps) => (
    <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...rest}>
        {children}
    </button>
);
