import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      {/* protect routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* catch all */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>,
  ),
);

export default router;
