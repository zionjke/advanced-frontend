import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={onTranslate}
                className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};

