import {lazy} from "react";

{/* Подгружаем компоненты lazy чтобы весь код не лез в одну чанку, подгружая компоненты асинхронно - разбиваем каждую компоненту на отдельную чанку. */}

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ПОТОМ УДАЛИТЬ!!
    setTimeout(() => resolve(import(/* webpackChunkName: "about_page"*/ './AboutPage')), 1500)
}))


