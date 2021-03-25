import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 20%;
  height: 100vh;
  background-color: transparent;
  border-right: 1px solid #ddd;
`;

export const NevMenuTitleContainer = styled.div`
  display: flex;
  margin: 1em;
  flex-direction: column;
`;

export const NavMenuLogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

export const NavMenuTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  color: #000;
  font-weight: unset;
  font-family: "Raleway", sans-serif;
`;

export const NavMenuSoftwareVersion = styled.h5`
  margin: 3px 10px;
  font-size: 1em;
  color: #000;
  font-weight: unset;
  font-family: "Raleway", sans-serif;
`;

export const NavMenuSubtitle = styled.h3`
  margin: 10px 0;
  font-size: 1.7em;
  color: #000;
  font-family: "Raleway", sans-serif;
`;

export const NavMenuItemsContainer = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  background-color: "#ddd";
`;
