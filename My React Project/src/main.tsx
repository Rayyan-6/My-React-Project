// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider   } from 'react-router-dom'
import About from './components/About.tsx'
import ContactUs from './components/ContactUs.tsx'
import Blogs from './components/Blogs.tsx'
import Layout from './components/Layout.tsx'
import BlogsLayout from './components/BlogsLayout.tsx'
import ReactBlogs from './components/ReactBlogs.tsx'
import NodeBlogs from './components/NodeBlogs.tsx'
import DiceGame from './components/game/DiceGame.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'contactus', element: <ContactUs /> },
      { path: 'dicegame', element: <DiceGame /> },
      { path: 'blogs', element: <BlogsLayout />,
        children: [
          {
            index:true, element: <Blogs />,
          },
          {
            path: 'react', element: <ReactBlogs />
          },
          {
            path: 'node', element: <NodeBlogs />
          }
        ]
       },
    ]
  },

 

])

createRoot(document.getElementById('root')!).render(
  
    // <App />
    <RouterProvider router = {router}/>
  
)
