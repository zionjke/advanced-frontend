import {lazy} from "react";

export const MainPage = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ПОТОМ УДАЛИТЬ!!
    setTimeout(() => resolve(import(/* webpackChunkName: "main_page"*/ './Main')), 1500)
}))
