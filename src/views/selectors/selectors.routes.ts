import { RouteConfig } from 'vue-router';
import SelectorsOverview from './SelectorsOverview.vue';
import SelectorsElement from './SelectorsElement.vue';
import SelectorsId from './SelectorsId.vue';
import SelectorsRelative from './SelectorsRelative.vue';
import SelectorsWildcard from './SelectorsWildcard.vue';
import SelectorsPseudo from './SelectorsPseudo.vue';
import SelectorsSeparators from './SelectorsSeparators.vue';
import SelectorsClass from './SelectorsClass.vue';
// import BoxModelExamples from './BoxModelExample.vue';

const selectorsRoutes = [
    {
        path: '',
        name: 'selectors',
        redirect: 'the-concept',
    },
    {
        path: 'the-concept',
        name: 'selectors-overview',
        component: SelectorsOverview,
    },
    {
        path: 'element',
        name: 'selectors-element',
        component: SelectorsElement,
    },
    {
        path: 'class-and-attribute',
        name: 'selectors-class',
        component: SelectorsClass,
    },
    {
        path: 'id',
        name: 'selectors-id',
        component: SelectorsId,
    },
    {
        path: 'relative',
        name: 'selectors-relative',
        component: SelectorsRelative,
    },
    {
        path: 'wildcard',
        name: 'selectors-wildcard',
        component: SelectorsWildcard,
    },
    {
        path: 'pseudo',
        name: 'selectors-pseudo',
        component: SelectorsPseudo,
    },
    {
        path: 'separators',
        name: 'selectors-separators',
        component: SelectorsSeparators,
    },
    // {
    //     path: 'examples',
    //     name: 'box-model-examples',
    //     component: BoxModelExamples,
    // },
] as RouteConfig[];

export default selectorsRoutes;
export {
    selectorsRoutes,
};
