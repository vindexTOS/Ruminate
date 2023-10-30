import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import { GeneralContextProvider } from './contexts/GeneralContext'
import Test from './pages/test'
import Home from './pages/Home'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <GeneralContextProvider>
          <Root />
        </GeneralContextProvider>
      ),
      // errorElement: <NotFound />,
      children: [{ path: '/', element: <Home /> }],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
