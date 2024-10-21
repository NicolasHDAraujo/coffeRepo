import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Delivery } from "./pages/Delivery";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Order />}/>
        <Route path="/entrega" element={<Delivery />}/>

      </Route>
    </Routes>
  )
}