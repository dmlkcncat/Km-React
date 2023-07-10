// "use client"

import { Breadcrumb } from "flowbite-react";

import { HiHome } from "react-icons/hi"
import { Link, useLocation } from "react-router-dom"

// const BBreadCrumb = () => {
//   const location = useLocation()
//   const paths = location.pathname.split("/").filter((path) => path !== "")

//   return (
//     <Breadcrumb aria-label="Default breadcrumb example">
//       <Breadcrumb.Item href="#" icon={HiHome}>
//         <p>Home</p>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
//       <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
//       {paths.map((path, index) => (
//         <li key={index}>
//           <Link to={`/${paths.slice(0, index + 1).join("/")}`}>{path}</Link>
//         </li>
//       ))}
//     </Breadcrumb>
//   )
// }
// export default BBreadCrumb

const BBreadCrumb = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    const getBreadcrumbs = () => {
        return router.currentRoute.value.matched.map((route) => {
          return {
            active: route.path === router.currentRoute.value.fullPath,
            name: route.name,
            path: `${router.options.history.base}${route.path}`,
          }
        })
      }

    
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HiHome}>
        <p>Home</p>
      </Breadcrumb.Item>
      {routes.map((route, index) => {
        if (route.path === currentPath) {
          return (
            <Breadcrumb.Item key={index}>
              {route.label}
            </Breadcrumb.Item>
          );
        }
        if (currentPath.startsWith(route.path)) {
          return (
            <Breadcrumb.Item key={index}>
              <Link to={route.path}>{route.label}</Link>
            </Breadcrumb.Item>
          );
        }
        return null;
      })}
    </Breadcrumb>
  )
}
export default BBreadCrumb