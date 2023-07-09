const config = {
  mode: 'site',
  title: 'Node Guidebook',
  description: 'Node 完全知识体系',
  base: '/black-node-guidebook/',
  publicPath: '/black-node-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/node-guidebook-favicon.svg',
  exportStatic: {},
  // dynamicImport: {},
  theme: {
    '@c-primary': '#3d8e96',
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-node-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
