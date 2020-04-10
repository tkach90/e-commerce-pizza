import React from "react";
import styled from "styled-components";
import {Title} from "../styles/title";
import {pizzaRed} from "../styles/colors";

const QuantityInputStyled = styled.input`
  width: 24px;
  font-size: 18px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  padding: -12px;
  line-height: 23px;
  margin: 0 10px;
  border: 1px solid ${pizzaRed};
  ${({ disabled}) => 
    disabled && `opacity: .5;
    pointer-events: none;`}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({ quantity }) {
    return (
        <IncrementContainer>
            <div>Quantity:</div>
            <IncrementButton
                onClick={() =>{
                    quantity.setValue(quantity.value - 1);
                }}
                disabled={quantity.value === 1}
            > - </IncrementButton>
            <QuantityInputStyled {...quantity} />
            <IncrementButton
                onClick={() =>{
                    quantity.setValue(quantity.value + 1);
                }}
            > + </IncrementButton>
        </IncrementContainer>
    )
}