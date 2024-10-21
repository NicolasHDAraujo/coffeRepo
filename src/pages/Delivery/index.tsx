import { useContext } from "react"
import { CoffeesContext, OrderType } from "../../core/contexts/CoffeesListContext"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Details, Gradient, Icon, ItemsContainer, OrderContainer } from "./styles"

import ImageDelivery from '../../assets/Delivery.svg'

export function Delivery() {
  const { order } = useContext(CoffeesContext)
  const pedido = order[0]
  console.log(pedido)

  function convertTypeOfPaymentMethod(pedido: OrderType) {
    if(pedido.pagamento == 'credit') {
      return 'Cartão de crédito'
    } else if(pedido.pagamento == 'debit') {
      return 'Cartão de débito'
    } else {
      return 'Dinheiro'
    }
  }

  return (
    <OrderContainer>
      <header>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <Details>
      <Gradient>
        <ItemsContainer>
        <div>
          <Icon type="mapin">
        <MapPin weight="fill" size={20} />
          </Icon>
        <p>
          Entrega em 
          <b> {pedido.rua}</b> <br />
          {pedido.cidade}, {pedido.uf}
        </p>
        </div>
        <div>
          <Icon type="timer">
        <Timer weight="fill" size={20}  />
          </Icon>
        <p>
          Previsão de entrega <br/>
          <b>20 min - 30 min</b>
        </p>
        </div>
        <div>
          <Icon type="dollar">
          <CurrencyDollar size={20} />
          </Icon>
          <p>
            Pagamento na entrega <br/>
            <b>{convertTypeOfPaymentMethod(pedido)}</b>
          </p>
        </div>
        </ItemsContainer>
      </Gradient>
      <img src={ImageDelivery} />
      </Details>
    </OrderContainer>
  )
}