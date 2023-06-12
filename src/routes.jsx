import { lazy, Suspense } from "react"
import { Loading } from "./components/LoadingSpinner"
// import { LoadingSpinner } from "./components/LoadingSpinner"

const MainLayout = lazy(() => import("./layout/MainLayout"))
const HomePage = lazy(() => import("./pages/HomePage/index"))

const ProductPage = lazy(() => import("./pages/Product"))

const AboutUsManagement = lazy(() => import("./pages/AboutUsManagement/index"))

const ProcessesManagement = lazy(() => import("./pages/ProcessesManagement/index"))
const DetailProcessesPage = lazy(() => import("./pages/ProcessesManagement/DetailProcessesPage"))


/** @type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    element: <MainLayout />,
    lazy: true,
    children: [
      {
        index: true,
        name: "homepage",
        element: <HomePage />,
        auth: true,
        lazy: true,
      },
      {
        path: "urunler",
        name: "product",
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
        path: "hakkımızda",
        name: "aboutus",
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
        path: "hizmetler",
        name: "processes",
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
        element: <DetailProcessesPage />,
        lazy: true,
      }
    ],
  },
]

const mapRoute = (list) => {
  return list.map((item) => {
    // if (item?.auth && "element" in item) {
    //   item.element = <PrivateRoute>{item.element}</PrivateRoute>
    // }

    if (item?.lazy && "element" in item) {
      item.element = <Suspense fallback={<Loading />}>{item.element}</Suspense>
    }

    // if (item?.wrap && 'element' in item) {
    //   item.element = <Wrapper>{item.element}</Wrapper>
    // }

    // if ('element' in item) {
    //   item.element = <RouteTransition key={index}>{item.element}</RouteTransition>
    // }

    if ("children" in item) {
      item.children = mapRoute(item.children)
    }

    return item
  })
}

const finalRoutes = mapRoute(routes)

export default finalRoutes
