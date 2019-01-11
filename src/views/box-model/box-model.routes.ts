import { RouteConfig } from 'vue-router';
import BoxModelOverview from './BoxModelOverview.vue';
import BoxModelBorder from './BoxModelBorder.vue';
import BoxModelContent from './BoxModelContent.vue';
import BoxModelMargins from './BoxModelMargins.vue';
import BoxModelOther from './BoxModelOther.vue';
import BoxModelPadding from './BoxModelPadding.vue';
import BoxModelExamples from './BoxModelExample.vue';

const boxModelRoutes = [
    {
        path: '',
        name: 'box-model',
        redirect: 'the-concept',
    },
    {
        path: 'the-concept',
        name: 'box-model-overview',
        component: BoxModelOverview,
    },
    {
        path: 'content',
        name: 'box-model-content',
        component: BoxModelContent,
    },
    {
        path: 'padding',
        name: 'box-model-padding',
        component: BoxModelPadding,
    },
    {
        path: 'border',
        name: 'box-model-border',
        component: BoxModelBorder,
    },
    {
        path: 'margins',
        name: 'box-model-margins',
        component: BoxModelMargins,
    },
    {
        path: 'other',
        name: 'box-model-other',
        component: BoxModelOther,
    },
    {
        path: 'examples',
        name: 'box-model-examples',
        component: BoxModelExamples,
    },
] as RouteConfig[];

export default boxModelRoutes;
export {
    boxModelRoutes,
};
