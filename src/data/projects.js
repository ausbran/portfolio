const projects = [
  {
    slug: 'tgrsite',
    category: 'design',
    title: 'tgr site',
    description: "A redesign of Teton Gravity Research's website",
    date: '2018',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    overview: "Reimagining the entire structure of TGR's site.",
    tasks: ['web design', 'prototyping'],
    roles: ['ui', 'ux', 'animator'],
    blocks: [
      {
        type: 'text',
        eyebrow: 'Case Study',
        title: 'Reframe the TGR ecosystem',
        body: 'A full navigation and content restructure for films, tours, and editorial.'
      },
      {
        type: 'image',
        title: 'Film Page',
        description: 'A landing point for film specific info, content, and tour stops.',
        media: { type: 'image', src: 'tgrsite-film-desktop.webp' }
      },
      {
        type: 'video',
        title: 'TGRtv',
        description: 'An immersive video content experience.',
        media: { type: 'video', src: 'tgrsite-tv-desktop.mp4' }
      },
      {
        type: 'video',
        title: 'The Stash',
        description: 'An immersive video content experience.',
        media: { type: 'video', src: 'tgrsite-stash.mp4' }
      },
      {
        type: 'video',
        title: 'Tour',
        description: 'An immersive video content experience.',
        media: { type: 'video', src: 'tgrsite-tour.mp4' }
      },
      {
        type: 'quote',
        quote: 'Some amazing quote about the project goes here.'
      },
      {
        type: 'video',
        title: 'All Films',
        description: 'An immersive video content experience.',
        media: { type: 'video', src: 'tgrsite-films.mp4' }
      },
      {
        type: 'split',
        title: 'Film Page',
        description: 'A landing point for film specific info, content, and tour stops.',
        primary: { type: 'video', src: 'tgrsite-film-desktop.mp4' },
        secondary: { type: 'image', src: 'tgrsite-film-mobile.webp' }
      },
      {
        type: 'split',
        title: 'Category Page',
        description: 'A landing point for film specific info, content, and tour stops.',
        primary: { type: 'video', src: 'tgrsite-category-desktop.mp4' },
        secondary: { type: 'video', src: 'tgrsite-category-mobile.mp4' }
      },
      {
        type: 'video',
        title: 'About Page',
        description: 'Second description text goes here and tells about project.',
        media: { type: 'video', src: 'tgrsite-post.mp4' }
      }
    ]
  },
  {
    slug: 'united',
    category: 'design',
    title: 'united by blue site',
    description: 'ubb sustainability description',
    date: 'Spring 2022',
    clientLogo: 'united-logo.svg',
    clientName: 'United By Blue',
    overview: 'ubb overview description here',
    tasks: ['web design', 'front end development', 'prototyping'],
    roles: ['ui', 'ux', 'front end dev'],
    blocks: [
      {
        type: 'video',
        title: 'Site Preview',
        description: 'A landing point for all brand and product content.',
        media: { type: 'video', src: 'united.mp4' }
      }
    ]
  },
  {
    slug: 'bode',
    category: 'design',
    title: 'bode miller site',
    description: "Design and development of Olympic skier Bode Miller's website",
    date: 'Summer 2019',
    clientLogo: 'bode-logo.svg',
    clientName: 'Bode Miller',
    overview: "Reimagining the entire structure of Bode Miller's site.",
    tasks: ['web design', 'front end development', 'prototyping'],
    roles: ['ui', 'ux', 'animator'],
    blocks: [
      {
        type: 'toggle',
        title: 'Whole Site',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: {
          video: { type: 'video', src: 'bode-home.mp4' },
          image: { type: 'image', src: 'bode-home.jpg' }
        }
      },
      {
        type: 'text',
        eyebrow: 'Design Notes',
        title: 'Performance with editorial feel',
        body: 'Large typography and minimal UI reinforce Bode\'s personal brand.'
      }
    ]
  },
  {
    slug: 'breakingthrough',
    category: 'code',
    title: 'breaking through',
    description: 'A digital series featuring six female athletes at the top of the action sports world',
    date: 'Winter 2018',
    clientLogo: 'rei-logo.svg',
    clientName: 'REI',
    awards: 'Powder film of the year 2018',
    overview: 'Create a visual interpretation of the film, Far Out.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'video',
        title: 'Series Trailer',
        description: 'A quick look at the series tone and visual language.',
        media: { type: 'video', src: 'breakingthrough.mp4' }
      },
      {
        type: 'embed',
        title: 'Episode Teaser',
        description: 'Featured episode trailer.',
        url: 'https://www.youtube.com/embed/28x9EQOxhSs?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1'
      }
    ]
  },
  {
    slug: 'approach',
    category: 'motion',
    title: 'the approach',
    description: 'approach description',
    date: 'Fall 2021',
    clientLogo: 'northface-logo.svg',
    clientName: 'The North Face',
    overview: 'approach overview description here',
    tasks: ['web design', 'front end development', 'prototyping'],
    roles: ['ui', 'ux', 'front end dev'],
    blocks: [
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'approach.mp4' }
      }
    ]
  },
  {
    slug: 'journey',
    category: 'motion',
    title: 'journey > reward',
    description: 'Jeremy Jones and Selema Masekela discuss sports, the environment, and social justice',
    date: 'Fall 2020',
    clientLogo: 'sierra-logo.svg',
    clientName: 'Sierra',
    overview: 'The Journey Is Greater Than the Reward aims to have an honest discussion.',
    tasks: ['packaging'],
    roles: ['print', 'prepress'],
    blocks: [
      {
        type: 'video',
        title: 'Episode 1',
        description: 'The first content piece in the series.',
        media: { type: 'video', src: 'journey.mp4' }
      },
      {
        type: 'image',
        title: 'Ad Units',
        description: 'Set of ads for the TGR website to promote the series launch.',
        media: { type: 'image', src: 'journey-ads.jpg' }
      }
    ]
  },
  {
    slug: 'revive',
    category: 'design',
    title: 'revive site',
    description: "Design and development of Revive's website",
    date: 'Spring 2021',
    clientLogo: 'revive-logo.svg',
    clientName: 'Revive',
    overview: "Reimagining the entire structure of Revive's site.",
    tasks: ['web design', 'front end development', 'prototyping'],
    roles: ['ui', 'ux', 'front end dev'],
    blocks: [
      {
        type: 'text',
        eyebrow: 'Visual System',
        title: 'Product-first landing',
        body: 'Branding mark, typography, and motion combine for a tactile web presence.'
      },
      {
        type: 'video',
        title: 'Home Page',
        description: 'Combining the Revive branding mark with subtle product animation and video texture.',
        media: { type: 'video', src: 'revive-home-1920px.mp4' }
      }
    ]
  },
  {
    slug: 'evoke',
    category: 'design',
    title: 'evoke site',
    description: "Design and partial development of Evoke's website",
    date: 'Summer 2021',
    clientLogo: 'evoke-logo.svg',
    clientName: 'Evoke',
    overview: "Reimagining the entire structure of Evoke's site.",
    tasks: ['web design', 'front end development', 'prototyping'],
    roles: ['ui', 'ux', 'front end dev'],
    blocks: [
      {
        type: 'video',
        title: 'Site Preview',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'evoke.mp4' }
      }
    ]
  },
  {
    slug: 'farout',
    category: 'design',
    title: 'far out',
    description: "Teton Gravity Research's 23rd annual ski and snowboard film",
    date: 'Winter 2018',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    awards: 'Powder film of the year 2018',
    overview: 'Create a visual interpretation of the film, Far Out.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'gallery',
        title: 'Print System',
        description: 'Poster and editorial imagery from the campaign.',
        images: [
          { type: 'image', src: 'far-out-poster.jpg' },
          { type: 'image', src: 'far-out-image1.jpeg' }
        ]
      },
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'farout.mp4' }
      }
    ]
  },
  {
    slug: 'rogue',
    category: 'design',
    title: 'rogue elements',
    description: "Teton Gravity Research's 22nd annual ski and snowboard film",
    date: 'Winter 2017',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    overview: 'Create a visual interpretation of the film, Rogue Elements.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'rogue.mp4' }
      }
    ]
  },
  {
    slug: 'winterland',
    category: 'design',
    title: 'winterland',
    description: "Teton Gravity Research's 24th annual ski and snowboard film",
    date: 'Winter 2019',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    overview: 'Create a visual interpretation of the film, Winterland.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'winterland.mp4' }
      }
    ]
  },
  {
    slug: 'makebelieve',
    category: 'motion',
    title: 'make believe',
    description: "Teton Gravity Research's 25th annual ski and snowboard film",
    date: 'Winter 2020',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    overview: 'Create a visual interpretation of the film, Make Believe.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'makebelieve.mp4' }
      }
    ]
  },
  {
    slug: 'accomplice',
    category: 'motion',
    title: 'accomplice',
    description: 'A mountain bike film directed by Jeremy Grant',
    date: 'Spring 2021',
    clientLogo: 'tgr-logo.svg',
    clientName: 'Teton Gravity Research',
    overview: 'Create a visual interpretation of the film, Accomplice.',
    tasks: [
      'movie poster',
      'film branding system',
      'motion graphics',
      'web design',
      'digital series development',
      'print and digital ads'
    ],
    roles: ['print', 'ui', 'ux', 'front end dev', 'animator'],
    blocks: [
      {
        type: 'video',
        title: 'Film Page',
        description: 'A landing point for all film specific info, content, and tour stops.',
        media: { type: 'video', src: 'accomplice.mp4' }
      }
    ]
  },
  {
    slug: 'melvin',
    category: 'design',
    title: 'experimental series',
    description: 'melvin beers here',
    date: 'Fall 2019 - Now',
    clientLogo: 'melvin-logo.svg',
    clientName: 'Melvin',
    overview: 'Some text about Melvin',
    tasks: ['packaging'],
    roles: ['print', 'prepress'],
    blocks: [
      {
        type: 'video',
        title: 'Series Preview',
        description: 'A landing point for the experimental series.',
        media: { type: 'video', src: 'melvin.mp4' }
      }
    ]
  }
];

const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

const getProjectBySlug = (slug) => projectsBySlug.get(slug);

const getProjectsByCategory = (category) =>
  projects.filter((project) => project.category === category);

export { projects, getProjectBySlug, getProjectsByCategory };
