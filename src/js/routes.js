import home from '@/components/home.vue';
import about from '@/components/about.vue';
import projects from '@/components/projects.vue';
import ProjectPage from '@/components/projectPage.vue';
import ProjectGalleryDemo from '@/components/ProjectGalleryDemo.vue';
import { projects as projectData } from '@/data/projects';

const projectRoutes = projectData.map((project) => ({
  path: `/${project.slug}`,
  name: project.slug,
  component: ProjectPage,
  props: { slug: project.slug },
  meta: {
    notHome: true,
    project: true,
    [project.category]: true
  }
}));

const routes = [
    {
    	path: '/',
    	name: 'home',
    	component: home,
    	meta: {
    		home: true,
    	}
	  },
    {
    	path: '/about',
    	name: 'about',
    	component: about,
    	meta: {
		    notHome: true,
        about: true,
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
      path: '/demo/gallery',
      name: 'demo-gallery',
      component: ProjectGalleryDemo,
      meta: {
        notHome: true
      }
    },
    ...projectRoutes,
];

export default routes;
