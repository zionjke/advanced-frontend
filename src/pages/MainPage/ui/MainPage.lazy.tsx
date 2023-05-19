import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ПОТОМ УДАЛИТЬ!!
    setTimeout(() => resolve(import(/* webpackChunkName: "main_page" */ './MainPage')), 1500);
}));
