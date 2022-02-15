import React from "react";
import { useRoutes } from "react-router-dom";
import Inventory from "./page/inventory";
import Material from "./page/material";

export default function Router() {
  return useRoutes([
    { path: "/", element: <Inventory /> },
    { path: "/material", element: <Material /> },
  ]);
}
