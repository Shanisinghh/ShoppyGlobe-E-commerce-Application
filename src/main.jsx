import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./redux/srore.js";
import "./index.css";


const LoadingComponent = () => (
 <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const CheckOut = lazy(() => import("./components/CheckOut.jsx"));
const Confermation = lazy(() => import("./components/Confermation.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="confermation" element={<Confermation />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingComponent />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);

