import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './index.css'


export default function App() {
  return useRoutes(routes)
}
