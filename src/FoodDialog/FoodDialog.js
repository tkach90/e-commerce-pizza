import React from "react";
import styled from "styled-components";

import { pizzaRed } from "../styles/colors";
import { FoodLabel } from "../Menu/FoodGrid";
import { Title } from "../styles/title";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
  padding: 0 40px 80px;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: 0 -2px 10px 0 grey;
`;

export const ConfirmButton = styled(Title)`
  width: 200px;
  height: 20px;
  margin: 10px;
  padding: 10px;
  color: white;
  background-color: ${pizzaRed};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  ${({disabled}) => disabled &&
    `
     opacity: .5;
     background-color: grey;
     pointer-events: none;   
    `}
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: .7;
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => (img ? 
    `background-image: url(${img});` : `min-height: 75px;`)};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
    return (
        order.quantity *
        (order.price +
            order.toppings.filter(t => t.checked).length * pricePerTopping)
    );
}

function hasToppings(food) {
    return food.section === "Pizza";
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);
    const isEditing = openFood.index > -1;

    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };

    function editOrder() {
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }
    
    return (
        <>
            <DialogShadow onClick={close}/>
            <Dialog>
                <DialogBanner img={openFood.img} >
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity} />
                    {hasToppings(openFood) && (
                        <>
                            <h3> Would you like toppings? </h3>
                            <Toppings {...toppings} />
                        </>
                    )}
                    {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio} />}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={isEditing ? editOrder : addToOrder}
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        {isEditing ? `Update order: ` : `Add to order: `}
                        {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export function FoodDialog(props) {
    if (!props.openFood) return null;

    return <FoodDialogContainer {...props} />
}