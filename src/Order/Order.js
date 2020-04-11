import React from "react";
import styled from "styled-components";
import { DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import {formatPrice} from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 48px;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  box-shadow: 4px 0 5px 4px grey;
  z-index: 10;
`;

const OrderContent = styled(DialogContent)`
  height: 100%;
  padding: 20px;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
  ${({editable}) => editable ? `
  &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }` :
    `pointer-events: none;`
  }
`;

const OrderItem = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`;

export function Order({ orders, setOrders,setOpenFood }) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const tax = subtotal * .07;

    const total = subtotal + tax;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    return (
            <OrderStyled >
                {orders.length === 0 ? (
                    <OrderContent>order box is empty</OrderContent>
                ) : (
                    <OrderContent>
                        <OrderContainer>
                            Your Order:
                        </OrderContainer>
                        {orders.map((order, index) => (
                            <OrderContainer editable>
                                <OrderItem
                                    onClick={() => {
                                        setOpenFood({...order, index})
                                    }}
                                >
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div
                                        style={{cursor: 'pointer'}}
                                        onClick={e => {
                                            e.stopPropagation();
                                            deleteItem(index);
                                        }}
                                    >
                                        ❌
                                    </div>
                                    <div>{formatPrice(getPrice(order))}</div>
                                </OrderItem>
                                <DetailItem>
                                    {order.toppings
                                        .filter(t => t.checked)
                                        .map(topping => topping.name)
                                        .join(", ")
                                    }
                                </DetailItem>
                                {order.choice && <DetailItem>{order.choice}</DetailItem>}
                            </OrderContainer>
                        ))}
                        <OrderContainer>
                            <OrderItem>
                                <div/>
                                <div>Sub-Total</div>
                                <div>{formatPrice(subtotal)}</div>
                            </OrderItem>
                            <OrderItem>
                                <div/>
                                <div>Tax</div>
                                <div>{formatPrice(tax)}</div>
                            </OrderItem>
                            <OrderItem>
                                <div/>
                                <div>Total</div>
                                <div>{formatPrice(total)}</div>
                            </OrderItem>
                        </OrderContainer>
                    </OrderContent>
                )}
                <DialogFooter>
                    <ConfirmButton>
                        Checkout
                    </ConfirmButton>
                </DialogFooter>
            </OrderStyled>
    )
}