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
    },
    {
      path: '1',
      component: () => import('@/views/nodeTable/1/index'),
      name: '1',
      meta: { title: '1' }
    },
    {
      path: '2',
      component: () => import('@/views/nodeTable/2/index'),
      name: '2',
      meta: { title: '2' }
    },
    {
      path: '3',
      component: () => import('@/views/nodeTable/3/index'),
      name: '3',
      meta: { title: '3' }
    },
    {
      path: '4',
      component: () => import('@/views/nodeTable/4/index'),
      name: '4',
      meta: { title: '4' }
    },
    {
      path: '5',
      component: () => import('@/views/nodeTable/5/index'),
      name: '5',
      meta: { title: '5' }
    },
    {
      path: '6',
      component: () => import('@/views/nodeTable/6/index'),
      name: '6',
      meta: { title: '6' }
    },
    {
      path: '7',
      component: () => import('@/views/nodeTable/7/index'),
      name: '7',
      meta: { title: '7' }
    },
    {
      path: '8',
      component: () => import('@/views/nodeTable/8/index'),
      name: '8',
      meta: { title: '8' }
    },
  ]
}
export default nodeTableRouter
