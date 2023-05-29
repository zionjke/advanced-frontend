import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.OUTLINE} className={cls.links}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
                Auth
            </Modal>
        </div>
    );
};
