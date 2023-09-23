import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = () => {
        setIsOpenAuthModal(true);
    };

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button onClick={onShowModal} theme={ButtonTheme.OUTLINE} className={cls.links}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
        </div>
    );
};
