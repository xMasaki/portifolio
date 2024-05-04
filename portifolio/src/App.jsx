import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

export default function App() {
  return (
    <>
      <div className=''>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}
