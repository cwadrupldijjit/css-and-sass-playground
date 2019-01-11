import { RouteConfig } from 'vue-router';
import SpecificityOverview from './SpecificityOverview.vue';
import SpecificityCalculator from './SpecificityCalculator.vue';

const specificityRoutes = [
    {
        path: '',
        name: 'specificity',
        redirect: 'the-concept',
    },
    {
        path: 'the-concept',
        name: 'specificity-overview',
        component: SpecificityOverview,
    },
    {
        path: 'calculator',
        name: 'specificity-calculator',
        component: SpecificityCalculator,
    },
] as RouteConfig[];

export {
    specificityRoutes,
};

export default specificityRoutes;
