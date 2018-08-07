import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotToros from '../parts/RobotToros.vue';
import RobotBases from '../parts/RobotBases.vue';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Home',
  component: HomePage,
},
{
  path: '/build',
  name: 'Build',
  component: RobotBuilder,
},
{
  path: '/parts/browse',
  name: 'BrowseParts',
  component: BrowseParts,
  children: [
    {
      name: 'BrowseHeads',
      path: 'heads',
      component: RobotHeads,
    },
    {
      name: 'BrowseArms',
      path: 'arms',
      component: RobotArms,
    },
    {
      name: 'BrowseToros',
      path: 'toros',
      component: RobotToros,
    },
    {
      name: 'BrowseBases',
      path: 'bases',
      component: RobotBases,
    },
  ],
},
{
  path: '/parts/:partType/:id',
  name: 'Parts',
  component: PartInfo,
  props: true,
}];

const router = new Router({ routes });

export default router;
