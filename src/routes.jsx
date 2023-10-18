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

const NewsPage = lazy(() => import('./pages/NewsManagement'))

const ReferencesPage = lazy(() => import('./pages/ReferencesManagement'))

// const AfterBeforeManagement = lazy(() => import('./pages/AfterBeforeManagement/index'))

const ProjectManagement = lazy(() => import('./pages/ProjectManagement/index'))

const QualityCertificates = lazy(() => import('./pages/QualityCertificates/index'))

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
        path: 'kurumsal',
        name: 'aboutus',
        label: 'Kurumsal',
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
        path: 'haberler',
        name: 'news',
        label: 'Haberler',
        children: [
          {
            index: true,
            element: <NewsPage />,
            auth: true,
            lazy: true,
          },
        ],
      },
      {
        path: 'referanslar',
        name: 'references',
        label: 'Referanslar',
        children: [
          {
            index: true,
            element: <ReferencesPage />,
            auth: true,
            lazy: true,
          },
        ],
      },
      {
        path: 'proje',
        name: 'project',
        label: 'Projeler',
        children: [
          {
            index: true,
            element: <ProjectManagement />,
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
        path: 'belgeler',
        name: 'belgeler',
        label: 'Kalite Belgeleri',
        element: <QualityCertificates />,
        lazy: true,
      },
      {
        path: 'sss',
        name: 'sss',
        label: 'sss',
        element: <SSSPage />,
        lazy: true,
      },
      // {
      //   path: 'oncesonra',
      //   name: 'oncesonra',
      //   label: 'ÖncesiSonrası',
      //   children: [
      //     {
      //       index: true,
      //       element: <AfterBeforeManagement />,
      //       auth: true,
      //       lazy: true,
      //     },
      //   ],
      // },
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
