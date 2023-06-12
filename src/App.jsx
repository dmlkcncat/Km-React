import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './style/index.css'
import './style/custom.css'
import 'swiper/css';
import './scss/style.scss'

export default function App() {
  return useRoutes(routes)
}
