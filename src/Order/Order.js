import React from "react";
import styled from "styled-components";
import { DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import {formatPrice} from "../Data/FoodData";

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
`;

const OrderItem = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
    return (
            <OrderStyled >
                {orders.length === 0 ? (
                    <OrderContent>order box is empty</OrderContent>
                ) : (
                    <OrderContent>
                        <OrderContainer>
                            Your Order:
                        </OrderContainer>
                        {orders.map(order => (
                            <OrderContainer>
                                <OrderItem>
                                    {/*<div>1</div>*/}
                                    {order.name}
                                    <div/>
                                    <div>{formatPrice(order.price)}</div>
                                </OrderItem>
                            </OrderContainer>
                        ))}
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