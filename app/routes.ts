import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/header-demo', 'routes/header-demo.tsx'),
  route('/hero', 'routes/hero.tsx'),
] satisfies RouteConfig;
