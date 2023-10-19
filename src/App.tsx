import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import { GeneralContextProvider } from './contexts/GeneralContext'
import Test from './pages/test'
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
      children: [{ path: '/', element: <Test /> }],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
