import { lazy } from 'react';

export const RoutesWelder = [
    {
        exact: true,
        path: "/:leadId",
        component:  lazy(() => import('./Welder/pages/Home'))
    },
    {
        exact: true,
        path: "/:leadId/about",
        component:  lazy(() => import('./Welder/pages/About'))
    },
    {
        exact: true,
        path: '/:leadId/gallery',
        component:  lazy(() => import('./Welder/pages/Gallery'))
    },
    {
        exact: true,
        path: '/:leadId/faq',
        component:  lazy(() => import('./Welder/pages/FAQ'))
    },
    {
        exact: true,
        path: '/:leadId/get-a-quote',
        component:  lazy(() => import('./Welder/pages/GetAQuote'))
    },
    {
        exact: true,
        path: '/:leadId/contact',
        component:  lazy(() => import('./Welder/pages/Contacts'))
    },
    {
        exact: true,
        path: '/:leadId/services/aluminium',
        component:  lazy(() => import('./Welder/pages/Services/Aluminium'))
    },
    {
        exact: true,
        path: '/:leadId/services/laser',
        component:  lazy(() => import('./Welder/pages/Services/Laser'))
    },
    {
        exact: true,
        path: '/:leadId/services/mobile',
        component:  lazy(() => import('./Welder/pages/Services/Mobile'))
    },
    {
        exact: true,
        path: '/:leadId/services/plasma',
        component:  lazy(() => import('./Welder/pages/Services/Plasma'))
    },
    {
        exact: true,
        path: '/:leadId/services/stainless',
        component:  lazy(() => import('./Welder/pages/Services/Stainless'))
    },
    {
        exact: true,
        path: '/:leadId/services/welding',
        component:  lazy(() => import('./Welder/pages/Services/Welding'))
    },
];
