import {lazy} from "react";

export const AboutPage = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ПОТОМ УДАЛИТЬ!!
    setTimeout(() => resolve(import(/* webpackChunkName: "about_page"*/ './About')), 1500)
}))
