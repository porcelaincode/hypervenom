import React from "react";
import {
  HoverButtonContainer,
  HoverButtonIcon,
  HoverButtonText,
} from "./HoverElements";

function HoverButton({ text, icon, linkTo }) {
  return (
    <HoverButtonContainer to={linkTo}>
      <HoverButtonIcon>{icon}</HoverButtonIcon>
      <HoverButtonText>{text}</HoverButtonText>
    </HoverButtonContainer>
  );
}

export default HoverButton;
