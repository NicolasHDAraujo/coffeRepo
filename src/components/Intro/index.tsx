import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Info, IntroContainer, IntroContent } from "./styles";
import Banner  from '../../assets/Banner.svg'
import { useTheme } from "styled-components";

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <IntroContent>
        <header>
        <h1>Encontre o café perfeito <br />para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br/>qualquer hora</p>
        </header>
        <Info>
          <div><ShoppingCart weight="fill" size={32} color={theme["gray-100"]} style={{backgroundColor: theme["yellow-900"]}} /> Compra simples e segura</div>
          <div><Package weight="fill" size={32} color={theme["gray-100"]} style={{backgroundColor: theme["gray-700"]}}/>Embalagem mantém o café intacto</div>
          <div><Timer weight="fill" size={32} color={theme["gray-100"]} style={{backgroundColor: theme["yellow-500"]}}/>Entrega rápida e rastreada</div>
          <div><Coffee weight="fill" size={32} color={theme["gray-100"]} style={{backgroundColor: theme["purple-500"]}}/> O café chega fresquinho até você</div>
        </Info>
      </IntroContent>
      <img src={Banner} />
    </IntroContainer>
  )
}