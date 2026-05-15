import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailsPage, ErrorPage, HomePage, PageLayout } from "./Routers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ":country",
            element: <DetailsPage />
          },
        ],
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
