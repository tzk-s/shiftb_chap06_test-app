import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TopPage from "./pages/TopPage";
import PostDetailPage from "./pages/PostDetailPage";
import { posts } from "./data/post";

const routesParams = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<TopPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
    </Route>
  )
);

export default routesParams;
