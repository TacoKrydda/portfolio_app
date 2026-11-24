import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projekt" element={<AllProjects />} />
        <Route
          path="projekt/:slug"
          element={
            <Suspense
              fallback={
                <p role="status" className="container loading">
                  Laddar projekt…
                </p>
              }
            >
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
