import Vue from 'vue';
import Router, { Route, RouteConfig, RouterOptions } from 'vue-router';
import Home from './views/Home.vue';
import BoxModel from './views/box-model/BoxModel.vue';
import PositionLayout from './views/PositionLayout.vue';
import FlexboxGrid from './views/FlexboxGrid.vue';
import Selectors from './views/selectors/Selectors.vue';
import Specificity from './views/specificity/Specificity.vue';
import Sass from './views/Sass.vue';
import Animations from './views/animations/Animations.vue';
import boxModelRoutes from './views/box-model/box-model.routes';
import selectorsRoutes from './views/selectors/selectors.routes';
import specificityRoutes from './views/specificity/specificity.routes';
import CssOverview from './views/CssOverview.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/overview',
      name: 'css-overview',
      component: CssOverview,
    },
    {
      path: '/selectors',
      component: Selectors,
      children: selectorsRoutes,
    },
    {
      path: '/specificity',
      component: Specificity,
      children: specificityRoutes,
    },
    {
      path: '/box-model',
      component: BoxModel,
      children: boxModelRoutes,
    },
    {
      path: '/position-and-layout',
      name: 'position-and-layout',
      component: PositionLayout,
    },
    {
      path: '/flexbox-and-grid',
      name: 'flexbox-and-grid',
      component: FlexboxGrid,
    },
    {
      path: '/animations',
      component: Animations,
    },
    {
      path: '/sass',
      name: 'sass',
      component: Sass,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ] as RouteConfig[],
  scrollBehavior(to, from, savedPosition?) {
    return savedPosition || { x: 0, y: 0 };
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-path-active',
} as RouterOptions);
