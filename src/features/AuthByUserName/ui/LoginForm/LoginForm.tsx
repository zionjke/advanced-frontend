import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getUserName } from '../../model/selectors/getUserName/getUserName';
import { getPassword } from '../../model/selectors/getPassword/getPassword';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('login_form');
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);
    const password = useSelector(getPassword);

    const onChangeUserName = useCallback((value:string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {

    }, []);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                onChange={onChangeUserName}
                value={userName}
                autoFocus
                placeholder={t('Введите логин')}
                className={cls.input}
                type="text"
            />
            <Input
                onChange={onChangePassword}
                value={password}
                placeholder={t('Введите пароль')}
                className={cls.input}
                type="text"
            />
            <Button onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
});
