import home from '@/components/home.vue';
import about from '@/components/about.vue';
import projects from '@/components/projects.vue';
import tgrsite from '@/components/tgrsite.vue';
import farout from '@/components/farout.vue';
import rogue from '@/components/rogue.vue';
import revive from '@/components/revive.vue';
import evoke from '@/components/evoke.vue';
import winterland from '@/components/winterland.vue';
import journey from '@/components/journey.vue';
import melvin from '@/components/melvin.vue';
import approach from '@/components/approach.vue';
import accomplice from '@/components/accomplice.vue';
import bode from '@/components/bode.vue';
import makebelieve from '@/components/makebelieve.vue';
import united from '@/components/united.vue';
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
    	component: projects,
    	meta: {
		    notHome: true,
        design: true    
    	}
    },
    {
    	path: '/code',
    	name: 'code',
    	component: projects,
    	meta: {
    		notHome: true,
        code: true
    	}
    },
    {
    	path: '/motion',
    	name: 'motion',
    	component: projects,
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
      path: '/united',
      name: 'united',
      component: united,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/approach',
      name: 'approach',
      component: approach,
      meta: {
        notHome: true,
        motion: true
      }
    },
    {
      path: '/revive',
      name: 'revive',
      component: revive,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/evoke',
      name: 'evoke',
      component: evoke,
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
      path: '/rogue',
      name: 'rogue',
      component: rogue,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/accomplice',
      name: 'accomplice',
      component: accomplice,
      meta: {
        notHome: true,
        motion: true
      }
    },
    {
      path: '/makebelieve',
      name: 'makebelieve',
      component: makebelieve,
      meta: {
        notHome: true,
        motion: true
      }
    },
    {
      path: '/bode',
      name: 'bode',
      component: bode,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/winterland',
      name: 'winterland',
      component: winterland,
      meta: {
        notHome: true,
        design: true
      }
    },
    {
      path: '/journey',
      name: 'journey',
      component: journey,
      meta: {
        notHome: true,
        motion: true
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