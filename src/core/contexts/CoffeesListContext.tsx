import { createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface CoffeesList {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  tags: string[];
}

interface CartItems {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

export interface OrderType {
  rua?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
  complemento?: string;
  numero?: string;
  pagamento?: 'credit' | 'debit' | 'money';
  totalValue?: number;
  uf?: string;
  items?: CartItems[];
}

interface CoffeesListContextProps {
  coffees: CoffeesList[];
  cart: CartItems[];
  order: OrderType[];
  insertIntoCart: (items: CartItems) => void;
  removeFromCart: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  createOrder: (order: OrderType[]) => Promise<void>; 
  totalItemsInCart: number;
}

interface CoffeesListProps {
  children: React.ReactNode;
}

export const CoffeesContext = createContext({} as CoffeesListContextProps);

export function CoffeesListProvider({ children }: CoffeesListProps) {
  const [order, setOrder] = useState<OrderType[]>(() => {
    const storedCart = localStorage.getItem('order');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cart, setCart] = useState<CartItems[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [coffees, setCoffees] = useState<CoffeesList[]>([]);

  const fetchCoffees = useCallback(async () => {
    const response = await api.get('coffees');
    setCoffees(response.data);
  }, []);

  function createOrder(order: OrderType[]): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        setOrder(order);
        setCart([]);
        localStorage.removeItem('cart');
        localStorage.setItem('order', JSON.stringify(order));

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  function insertIntoCart(items: CartItems) {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === items.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === items.id
            ? { ...item, quantity: item.quantity + items.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...items, quantity: items.quantity }];
      }
    });
  }

  function removeFromCart(id: number) {
    setCart(cart.filter(item => item.id !== id));
  }

  const incrementItem = (id: number) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementItem = (id: number) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  useEffect(() => {
    fetchCoffees();
  }, [fetchCoffees]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CoffeesContext.Provider value={{ coffees, insertIntoCart, removeFromCart, incrementItem, decrementItem, createOrder, cart, order, totalItemsInCart }}>
      {children}
    </CoffeesContext.Provider>
  );
}
