import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (
    {
        children,
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...rest
    },
) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...rest}
    >
        {children}
    </Link>
);
