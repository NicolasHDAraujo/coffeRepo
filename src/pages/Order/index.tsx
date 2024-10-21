import { useContext } from "react";
import { CoffeesContext } from "../../core/contexts/CoffeesListContext";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { CartDetails, Container, FormContainer, SectionCartDetailsContainer, SectionFormContainer, TransactionType, TransactionTypeButton } from "./styles";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { priceFormatter } from "../../core/lib/formatte";
import { Count } from "../../components/Count";
import { useNavigate } from "react-router-dom";

export function Order() {
  const { cart, incrementItem, decrementItem, removeFromCart, createOrder } = useContext(CoffeesContext);
  const navigate = useNavigate();

  const userDataFormSchema = z.object({
    cep: z.string().min(8).max(8),
    rua: z.string().min(3).max(100),
    numero: z.string().min(1),
    complemento: z.string().optional(),
    bairro: z.string().min(3).max(50),
    cidade: z.string().min(3).max(50).optional(),
    uf: z.string().length(2).optional(),
    pagamento: z.enum(["credit", "debit", "money"]),
  });

  type newOrderFormInputs = z.infer<typeof userDataFormSchema>;

  const { register, handleSubmit, formState: { isSubmitting, errors }, control } = useForm<newOrderFormInputs>({
    resolver: zodResolver(userDataFormSchema),
  });

  const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalValueWithTax = totalValue + 3.5;

  function createNewOrder(data: newOrderFormInputs) {
    const orderData = {
      ...data,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      })),
      totalValue: totalValueWithTax,
    };

    createOrder([orderData]).then(() => {
      navigate('/entrega');
    }).catch(() => {
      console.error("Erro ao criar pedido!");
    });
  }

  return (
    <Container>
      <SectionFormContainer onSubmit={handleSubmit((data) => {
        console.log("Formulário submetido, dados:", data);
        if (Object.keys(errors).length > 0) {
          console.log("Erros de validação:", errors);
        } else {
          console.log("Formulário submetido com sucesso");
          createNewOrder(data);
        }
      })}>
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <header>
            <MapPinLine size={22} />
            <p>Endereço de Entrega <br /><span>Informe o endereço onde deseja receber seu pedido</span></p>
          </header>
          <section>
            <div>
              <input type="text" placeholder="CEP" required {...register('cep')} />
            </div>
            <div>
              <input type="text" placeholder="Rua" style={{ flex: 1 }} required {...register('rua')} />
            </div>
            <div>
              <input type="text" placeholder="Numero" required {...register('numero')} />
              <input type="text" style={{ flex: 1 }} placeholder="Complemento" {...register('complemento')} />
            </div>
            <div>
              <input type="text" placeholder="Bairro" required {...register('bairro')} />
              <input type="text" style={{ flex: 1 }} placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" style={{ width: "60px" }} {...register('uf')} />
            </div>

            <footer>
              <div>
                <CurrencyDollar size={22} />
                <p>Pagamento <br /> <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span></p>
              </div>
              <Controller control={control} name='pagamento' render={({ field }) => (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant='credit' value='credit'>
                    <CreditCard size={16} />
                    Cartão de Crédito
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='debit' value='debit'>
                    <Bank size={16} />
                    Cartão de Débito
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='money' value='money'>
                    <Money size={16} />
                    Dinheiro
                  </TransactionTypeButton>
                </TransactionType>
              )} />
            </footer>
          </section>
        </FormContainer>

        <SectionCartDetailsContainer>
          <h3>Cafés Selecionados</h3>
          <div>
            {cart.map(item => (
              <CartDetails key={item.id}>
                <img src={item.image} alt={item.name} />
                <section>
                  <h4>{item.name}</h4>
                  <div>
                    <Count
                      count={item.quantity}
                      handleMinusClicked={() => decrementItem(item.id)}
                      handlePlusClicked={() => incrementItem(item.id)}
                    />
                    <button type="button">
                      <Trash size={16} onClick={() => removeFromCart(item.id)} />
                      Remover
                    </button>
                  </div>
                </section>
                <p>{priceFormatter.format(item.price)}</p>
              </CartDetails>
            ))}
          </div>
          <footer>
            <div>
              <p>Total de itens</p>
              <span>{priceFormatter.format(totalValue)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$3,50</span>
            </div>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total</p>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{priceFormatter.format(totalValueWithTax)}</span>
            </div>
            <button type='submit' disabled={isSubmitting}>Confirmar Pedido</button>
          </footer>
        </SectionCartDetailsContainer>
      </SectionFormContainer>
    </Container>
  );
}
