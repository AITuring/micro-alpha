import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: 'index' },
    { path: '/hello', component: '@/pages/hello', name: 'hello' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
