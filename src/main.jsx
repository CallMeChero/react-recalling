import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import NewPost from './routes/NewPost'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <Posts />, children: [
      { path: '/create-post', element: <NewPost />}
    ]},
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // React Strict Mode da imamo checkove za potencijalne probleme, legacy code itd
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
