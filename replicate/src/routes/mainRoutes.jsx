import MainLayout from "../layouts/mainLayouts";
import Home from "../pages/Home";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
];

export default mainRoutes;
