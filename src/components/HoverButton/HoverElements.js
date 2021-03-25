import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HoverButtonContainer = styled(LinkS)`
  padding: 5;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  height: 50px;
  align-items: center;
  margin: 10px 0;

  &:hover {
    background-color: #ddd;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const HoverButtonText = styled.p`
  margin: 0 10px;
  color: #000;
  font-size: 1.5em;
  font-family: "Raleway", sans-serif;
`;

export const HoverButtonIcon = styled.p`
  color: #000;
  margin: 5px 10px 0 10px;
  font-size: 1.5em;
`;
