/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nodeTableRouter = {
  path: '/nodeTable',
  component: Layout,
  redirect: '/nodeTable/geo-situation',
  name: 'nodeTable',
  meta: {
    title: 'nodeTable',
    icon: 'table'
  },
  children: [
    {
      path: 'geo-situation',
      component: () => import('@/views/nodeTable/geo-situation/index'),
      name: 'GeoSituation',
      meta: { title: 'Geo Situation' }
    },
    {
      path: 'link-recommand',
      component: () => import('@/views/nodeTable/link-recommand/index'),
      name: 'LinkRecommand',
      meta: { title: 'Link Recommand' }
    }
  ]
}
export default nodeTableRouter
