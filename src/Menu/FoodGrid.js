import styled from "styled-components";
import {Title} from "../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, .7);
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 150px;
  margin-top: 5px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({img}) => `url(${img});` };
  background-position: center;
  background-size: cover;
  filter: contrast(65%);
  border-radius: 7px;
  box-shadow: 0 0 2px 0 grey;
  transition-property: box-shadow, filter;
  transition-duration: .1s;
  
  &:hover {
    margin-top: 0px;
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0 0 10px 0 grey;
  }
`;