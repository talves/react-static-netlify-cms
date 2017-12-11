import menus from './src/menus'
import webpackSetup from './webpack.setup'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: menus.routes,
  webpack: webpackSetup,
}
