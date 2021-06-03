import home from '@/components/home.vue';
import about from '@/components/about.vue';
import work from '@/components/work.vue';
import farout from '@/components/farout.vue';
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
				notHome: true,
        design: true
    	}
    },
    {
    	path: '/code',
    	name: 'code',
    	component: work,
    	meta: {
				notHome: true,
        code: true
    	}
    },
    {
    	path: '/motion',
    	name: 'motion',
    	component: work,
    	meta: {
  			notHome: true,
  			motion: true
    	},
    },
    {
      path: '/farout',
      name: 'farout',
      component: farout,
      meta: {
        notHome: true,
        design: true
      }
    },
];

export default routes;