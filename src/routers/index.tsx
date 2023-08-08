import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { GlobalProvider } from "../contexts/contextGlobal";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<GlobalProvider />}>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
