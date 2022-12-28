import Page404 from './pages/404'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import PokemonLayout from './pages/PokemonLayout'
const routes = [
  {
    path: '/',
    name: 'home',
    element: <HomeLayout />,
    children: [
      {
        path:'/',
        name: 'index',
        element: <Home />,
      },
      
      {
        name: 'pokeName',
        path: 'pokemon',
        element: <PokemonLayout />,
        children: [
          {
            name: 'poke',
            path: ':pokemon',
            element: <Pokemon />,
          },
          {
            name: 'notFound',
            path: '*',
            element: <Page404 />,
          },
        ],
      },
      {
        name: 'notFound',
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]

const routMap = (routes) =>
  routes.map((route) => {
    if (route?.children) {
      //routelerin eğer childreni varsa route.children=authMap(route.children) diyerek recursive fonksiyon(kendini tekrar eden) kullandık yani children elemanı döndük return route kısmında yoksa zaten direkt o eleman dönüyor children olduğu sürece bu işlem tekrarlanıyor children eleman bitene kadar
      route.children = routMap(route.children)
    }
    return route
  })

export default routMap(routes)
