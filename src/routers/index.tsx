import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { GlobalProvider } from "../contexts/contextGlobal";
import { LoginPage } from "../pages/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<GlobalProvider />}>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />}/>
        </Route>
      </Route>
    </Routes>
  );
};
