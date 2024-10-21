import { CoffeesContext } from "../../core/contexts/CoffeesListContext"
import { useContext } from "react"
import { ListContainer, Title } from "./styles"
import { CoffeeItem } from "../CoffeeItem"

export function List() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <>
      <Title>Nossos cafés</Title>
      <ListContainer>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </ListContainer>
    </>
  )
}