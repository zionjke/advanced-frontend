import React, {
    ChangeEvent, ChangeEventHandler, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    autoFocus?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        // if (onChange) {
        //     onChange(e.target.value);
        // }

        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, []);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                ref={inputRef}
                className={cls.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>

    );
});
