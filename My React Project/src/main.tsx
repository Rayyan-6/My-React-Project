// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider   } from 'react-router-dom'
import About from './components/About.tsx'
import ContactUs from './components/ContactUs.tsx'
import Blogs from './components/Blogs.tsx'
import Layout from './components/Layout.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
       { index: true, element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'contactus', element: <ContactUs /> },
      { path: 'blogs', element: <Blogs /> },
    ]
  },

 

])

createRoot(document.getElementById('root')!).render(
  
    // <App />
    <RouterProvider router = {router}/>
  
)
