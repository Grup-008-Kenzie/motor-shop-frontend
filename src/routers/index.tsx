import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { GlobalProvider } from "../contexts/contextGlobal";
import { LoginPage } from "../pages/login";
import { Register } from "../pages/Register";
import { RegisterLoginProvider } from "../contexts/contexRegisterLogin";
import { ProfilePage } from "../pages/Profile";
import { NotFound } from "../pages/notFound";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<GlobalProvider />}>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route element={<RegisterLoginProvider/>}>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<Register />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
