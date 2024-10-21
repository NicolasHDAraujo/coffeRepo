import { Minus, Plus } from "phosphor-react";
import { CountContainer } from "./styles";

interface CountProps {
  handleMinusClicked: () => void;
  handlePlusClicked: () => void;
  count: number
}
export function Count({handlePlusClicked ,handleMinusClicked, count}: CountProps) {
  return (
    <CountContainer>
      <Minus onClick={handleMinusClicked} />
      <span>{count}</span>
      <Plus onClick={handlePlusClicked} />
    </CountContainer>
  )
}