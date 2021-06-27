import React from "react";
import { Nav, AppTitle } from "./styles";

interface Props {
  children: JSX.Element;
}

const Navbar = ({ children }: Props) => {
  return (
    <Nav>
      <AppTitle>My Repo Is Better Than Yours</AppTitle>
      {children}
    </Nav>
  );
};

export default Navbar;
