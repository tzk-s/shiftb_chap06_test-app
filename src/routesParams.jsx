import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TopPage from "./pages/TopPage";
import PostDetailPage from "./pages/PostDetailPage";
import ContactPage from "./pages/ContactPage";

const routesParams = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<TopPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

export default routesParams;
