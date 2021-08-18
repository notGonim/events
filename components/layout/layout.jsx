import React from "react";
import { Header } from "./main-header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
