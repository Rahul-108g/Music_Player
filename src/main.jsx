import { StrictMode } from "react";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./assets/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Secondmain from "./Component/Secondmain.jsx";
import ReactDom from "react-dom/client";
import PostList from "./Component/PostList.jsx";
import About from "./Component/About.jsx";
import Search from "./Component/Search.jsx";
import Instrument from "./Component/Instrument.jsx";
import Electronic from "./Component/Electronic.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/secmain",
    element: <Secondmain />,
    children: [
      { path: "/secmain", element: <PostList /> },
      { path: "/secmain/about", element: <About /> },
      { path: "/secmain/search", element: <Search /> },
      { path: "/secmain/instrument", element: <Instrument /> },
      { path: "/secmain/electronic", element: <Electronic /> },
    ],
  },
]);
ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
