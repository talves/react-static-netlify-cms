import menus from './src/menus'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: menus.routes,
}
