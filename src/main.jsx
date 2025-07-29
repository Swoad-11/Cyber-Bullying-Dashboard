import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./route/Routes.jsx";
import { ReportProvider } from "./comoponents/Provider/ReportProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReportProvider>
      <RouterProvider router={router} />
    </ReportProvider>
  </StrictMode>
);
