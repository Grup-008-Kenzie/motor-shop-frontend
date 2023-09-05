import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { GlobalProvider } from "../contexts/contextGlobal";
import { LoginPage } from "../pages/login";
import { Register } from "../pages/Register";
import { RegisterLoginProvider } from "../contexts/contexRegisterLogin";
import { ProfilePage } from "../pages/Profile";
import { ProductPage } from "../pages/Product";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<GlobalProvider />}>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route element={<RegisterLoginProvider />}>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<Register />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/productPage" element={<ProductPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
