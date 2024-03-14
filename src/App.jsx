import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Cart1 } from "./pages/cart1/cart1";
import { Cart2 } from "./pages/cart2/cart2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart1" element={<Cart1 />} />
          <Route path="/cart2" element={<Cart2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
