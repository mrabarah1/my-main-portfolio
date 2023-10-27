import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  About,
  HomeLayout,
  Skills,
  Projects,
  Landing,
  Error,
  Contact,
} from './pages'





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path:'about',
        element: <About />
      },
      {
        path:'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ], 
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />   
  )
}

export default App
