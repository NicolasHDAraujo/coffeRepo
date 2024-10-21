import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefautLayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefautLayoutContainer>
      <Header />
      <Outlet />
    </DefautLayoutContainer>
  )
}