import { lazy, Suspense } from 'react'
import { Loading } from './components/LoadingSpinner'
// import { LoadingSpinner } from "./components/LoadingSpinner"

const MainLayout = lazy(() => import('./layout/MainLayout'))
const HomePage = lazy(() => import('./pages/HomePage/index'))

const ProductPage = lazy(() => import('./pages/Product'))

const AboutUsManagement = lazy(() => import('./pages/AboutUsManagement/index'))

const ContactPageManagement = lazy(() => import('./pages/ContactPageManagement/index'))

const ProcessesManagement = lazy(() => import('./pages/ProcessesManagement/index'))
const DetailProcessesPage = lazy(() => import('./pages/ProcessesManagement/DetailProcessesPage'))

const SSSPage = lazy(() => import('./pages/SSSManagement/index'))

/** @type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    element: <MainLayout />,
    lazy: true,
    children: [
      {
        index: true,
        name: 'homepage',
        label: 'Anasayfa',
        element: <HomePage />,
        auth: true,
        lazy: true,
      },
      {
        path: 'urunler',
        name: 'product',
        label: 'Ürünler',
        children: [
          {
            index: true,
            element: <ProductPage />,
            auth: true,
            lazy: true,
          },
        ],
      },
      {
        path: 'hakkimizda',
        name: 'aboutus',
        label: 'Hakkımızda',
        children: [
          {
            index: true,
            element: <AboutUsManagement />,
            auth: true,
            lazy: true,
          },
        ],
      },
      {
        path: 'hizmetler',
        name: 'processes',
        label: 'Hizmetler',
        children: [
          {
            index: true,
            element: <ProcessesManagement />,
            auth: true,
            lazy: true,
          },
        ],
      },
      {
        path: 'hizmetler/:id',
        name: 'hizmetler',
        label: 'Hizmetler Detay',
        element: <DetailProcessesPage />,
        lazy: true,
      },
      {
        path: 'iletisim',
        name: 'iletisim',
        label: 'İletişim',
        element: <ContactPageManagement />,
        lazy: true,
      },
      {
        path: 'sss',
        name: 'sss',
        label: 'sss',
        element: <SSSPage />,
        lazy: true,
      },
    ],
  },
]

const mapRoute = (list) => {
  return list.map((item) => {
    // if (item?.auth && "element" in item) {
    //   item.element = <PrivateRoute>{item.element}</PrivateRoute>
    // }

    if (item?.lazy && 'element' in item) {
      item.element = <Suspense fallback={<Loading />}>{item.element}</Suspense>
    }

    // if (item?.wrap && 'element' in item) {
    //   item.element = <Wrapper>{item.element}</Wrapper>
    // }

    // if ('element' in item) {
    //   item.element = <RouteTransition key={index}>{item.element}</RouteTransition>
    // }

    if ('children' in item) {
      item.children = mapRoute(item.children)
    }

    return item
  })
}

const finalRoutes = mapRoute(routes)

export default finalRoutes
