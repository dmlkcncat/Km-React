import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './style/index.css'


export default function App() {
  return useRoutes(routes)
}
