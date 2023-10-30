import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from "./contexts/GeneralContext";
import Home from "./pages/home";
import Root from "./pages/root";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <GeneralContextProvider>
          <Root />
        </GeneralContextProvider>
      ),
      // errorElement: <NotFound />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
