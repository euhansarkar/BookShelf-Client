import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes/Routes";

function App() {
  return <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={Routes}></RouterProvider>
  </div>;
}

export default App;
