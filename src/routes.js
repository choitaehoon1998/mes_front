import React from "react";
import { useRoutes } from "react-router-dom";
import Inventory from "./page/inventory";

export default function Router() {
  return useRoutes([{ path: "/", element: <Inventory /> }]);
}
