import React from "react";
import styled from "styled-components";

import {pizzaRed} from "../styles/colors";
import { FoodLabel } from "../Menu/FoodGrid";
import { Title } from "../styles/title";

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
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
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: .7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export function FoodDialog({openFood, setOpenFood, setOrders, orders}) {
    function close() {
        setOpenFood();
    }

    if (!openFood) return null;

    const order = {
        name: openFood.name
    };

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

                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={addToOrder}
                    >
                        Add to order
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    );
}