import React from "react";
import { useRoutes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";

type Props = {};

const Routes = (props: Props) => {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
