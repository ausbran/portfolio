import home from '@/components/home.vue';
import about from '@/components/about.vue';
import work from '@/components/work.vue';

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'about', component: about},
    {path: '/work/:name?', name: 'work', component: work, props: true},
];

export default routes;