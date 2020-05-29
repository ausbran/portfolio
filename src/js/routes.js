import home from '@/components/home.vue';
import about from '@/components/about.vue';
import work from '@/components/work.vue';
import navigation from '@/components/navigation.vue';

const routes = [
    {
    	path: '/',
    	name: 'home',
    	component: home,
    	meta: {
    		home: true
    	}
	  },
    {
    	path: '/about',
    	name: 'about',
    	component: about,
    	meta: {
				notHome: true
    	}
    },
    {
    	path: '/design',
    	name: 'design',
    	component: work,
    	meta: {
				notHome: true
    	}
    },
    {
    	path: '/code',
    	name: 'about',
    	component: work,
    	meta: {
				notHome: true
    	}
    },
    {
    	path: '/motion',
    	name: 'motion',
    	component: work,
    	meta: {
				notHome: true,
				motion: true
    	}
    },
    {
    	path: '/work/:name?', 
    	name: 'work',
    	component: work,
    	props: true,
	    meta: {
				notHome: true
    	}
    },
];

export default routes;