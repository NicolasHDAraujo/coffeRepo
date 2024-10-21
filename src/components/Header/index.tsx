
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { Actions, HeaderContainer } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesContext } from '../../core/contexts/CoffeesListContext'
export function Header() {
  const { totalItemsInCart } = useContext(CoffeesContext)
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={Logo} onClick={() => navigate('/')} />

      <Actions>
        <p>
          <MapPin size={22} weight='fill'/>
          <span>Sorocaba, SP</span>
        </p>
        <Link to={'pedido'}>
          <ShoppingCart weight="fill" size={22}/>
          {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
        </Link>
      </Actions>
    </HeaderContainer>
  )
}