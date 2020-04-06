import React from "react";
import styled from "styled-components";
import {foods} from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`;

export function Menu() {
    return (
        <MenuStyled >
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                    <h1>{sectionName}</h1>
                    <FoodGrid>
                        {foods.map((food, id) => (
                            <Food key={id} img={food.img}>
                                <FoodLabel>
                                    {food.name}
                                </FoodLabel>
                            </Food>
                        ))}
                    </FoodGrid>
                </>
            ))}
        </MenuStyled>
    );
}