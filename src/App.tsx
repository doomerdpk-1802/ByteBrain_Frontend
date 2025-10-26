import { RoutesConfig } from "./Routes/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const AllRoutes = RoutesConfig.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
  return (
    <>
      <BrowserRouter>
        <Routes>{AllRoutes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
