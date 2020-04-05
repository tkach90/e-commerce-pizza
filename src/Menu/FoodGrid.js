import styled from "styled-components";
import {Title} from "../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, .7);
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({img}) => `url(${img});` };
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0 0 10px 0 grey;
  
  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`;