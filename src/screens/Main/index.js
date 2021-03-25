import React from "react";

import NavMenu from "../../components/NavMenu";
import AutoPilot from "../AutoPilot";
import { MainContainer } from "./MainElements";

function Main() {
  return (
    <MainContainer>
      <NavMenu />
      <AutoPilot />
    </MainContainer>
  );
}

export default Main;
