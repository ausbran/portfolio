import home from '@/components/home.vue';
import about from '@/components/about.vue';
import work from '@/components/work.vue';
import tgrsite from '@/components/tgrsite.vue';
import farout from '@/components/farout.vue';
import melvin from '@/components/melvin.vue';
import breakingthrough from '@/components/breakingthrough.vue';
import navigation from '@/components/navigation.vue';

const routes = [
    {
    	path: '/',
    	name: 'home',
    	component: home,
    	meta: {
    		home: true,
        fromHome: true
    	}
	  },
    {
    	path: '/about',
    	name: 'about',
    	component: about,
    	meta: {
		    notHome: true,
        about: true,
        fromHome: false
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
      path: '/tgrsite',
      name: 'tgrsite',
      component: tgrsite,
      meta: {
        notHome: true,
        design: true
      }
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
    {
      path: '/melvin',
      name: 'melvin',
      component: melvin,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/breakingthrough',
      name: 'breakingthrough',
      component: breakingthrough,
      meta: {
        notHome: true,
        code: true
      }
    },
];

export default routes;