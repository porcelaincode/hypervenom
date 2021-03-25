import React from "react";
import HoverButton from "../HoverButton";
import {
  NavContainer,
  NevMenuTitleContainer,
  NavMenuTitle,
  NavMenuSubtitle,
  NavMenuSoftwareVersion,
  NavMenuLogoContainer,
  NavMenuItemsContainer,
} from "./NavElements";

import {
  MdAllOut,
  MdBatteryStd,
  MdBuild,
  MdCropLandscape,
  MdDirectionsCar,
  MdFileDownload,
  MdLightbulbOutline,
  MdLock,
  MdNearMe,
  MdSettings,
  MdTimeline,
} from "react-icons/md";

function NavMenu() {
  return (
    <NavContainer>
      <NevMenuTitleContainer>
        <NavMenuLogoContainer>
          <NavMenuTitle>HyperVenom</NavMenuTitle>
          <NavMenuSoftwareVersion>version 0.1.0</NavMenuSoftwareVersion>
        </NavMenuLogoContainer>
        <NavMenuSubtitle>Dashboard</NavMenuSubtitle>
        <NavMenuItemsContainer>
          <HoverButton
            text="Autopilot"
            icon={<MdAllOut />}
            linkTo="autopilot"
          />
          <HoverButton
            text="Battery"
            icon={<MdBatteryStd />}
            linkTo="battery"
          />
          <HoverButton
            text="Car Status"
            icon={<MdTimeline />}
            linkTo="carstatus"
          />
          <HoverButton
            text="Controls"
            icon={<MdSettings />}
            linkTo="controls"
          />
          <HoverButton
            text="Display"
            icon={<MdCropLandscape linkTo="display" />}
          />
          <HoverButton
            text="Driving"
            icon={<MdDirectionsCar />}
            linkTo="driving"
          />
          <HoverButton
            text="Lights"
            icon={<MdLightbulbOutline />}
            linkTo="lights"
          />
          <HoverButton text="Locks" icon={<MdLock />} linkTo="locks" />
          <HoverButton
            text="Navigation"
            icon={<MdNearMe />}
            linkTo="navigation"
          />
          <HoverButton text="Service" icon={<MdBuild />} linkTo="service" />
          <HoverButton
            text="Software"
            icon={<MdFileDownload />}
            linkTo="software"
          />
        </NavMenuItemsContainer>
      </NevMenuTitleContainer>
    </NavContainer>
  );
}

export default NavMenu;
