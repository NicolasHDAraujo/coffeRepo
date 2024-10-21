import { ShoppingCart } from "phosphor-react";
import { Card, Footer, Price, ShoppingCartButton, Tags } from "./styles";
import { useContext, useState } from "react";
import { priceFormatter } from "../../core/lib/formatte";
import { Count } from "../Count";
import { CoffeesContext } from "../../core/contexts/CoffeesListContext";

interface ICoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

interface ICoffeeProps {
  coffee: ICoffeeItem;
}
export function CoffeeItem(data: ICoffeeProps) {
  const { insertIntoCart } = useContext(CoffeesContext)
  const [count, setCount] = useState(1)
  const { image, id, name, description, price, tags } = data.coffee;

  function handleMinusClicked() {
    if (count > 1) {
      setCount(state => state - 1)
    }
  }

  function handlePlusClicked() {
    setCount(state => state + 1)
  }

  function insertItemCart() {
    console.log(`Item ${name} ${id} added to cart with count ${count}`);
    data.coffee.quantity = count

    insertIntoCart(data.coffee)

    setCount(1)
  }


  return (
    <Card>
      <img src={image} alt={name} />
      <Tags>
        {tags.map(
          tag => <span key={tag}>{tag}</span>
        )}
      </Tags>
      <h3>{name}</h3>
      <p>{description}</p>
      <Footer>
        <Price>{priceFormatter.format(price)}</Price>
        <Count handlePlusClicked={handlePlusClicked} handleMinusClicked={handleMinusClicked} count={count}/>

        <ShoppingCartButton onClick={insertItemCart}>
          <ShoppingCart weight="fill" size={22}/>
        </ShoppingCartButton>
      </Footer>
    </Card>
  )
}