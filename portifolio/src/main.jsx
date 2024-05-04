import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './componentes/Home/Home.jsx'
import Projetos from './componentes/Projetos/Projetos.jsx'
import Contato from './componentes/Contato/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/projetos', element: <Projetos/>},
      {path: '/contato', element: <Contato/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
