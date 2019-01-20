import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
    {
      primaryText: "Overzicht huur artikelen",
      leftIcon: <FontIcon>list</FontIcon>,
      component: Link,
      to: "/app/stock_rent"
    },
    {
      divider: true
    },
    {
      primaryText: "Overzicht verkoop artikelen",
      leftIcon: <FontIcon>store</FontIcon>,
      component: Link,
      to: "/app/stock_sale"
    },
    {
      divider: true
    },
    {
      primaryText: "Overzicht reparatie artikelen",
      leftIcon: <FontIcon>build</FontIcon>,
      component: Link,
      to: "/app/stock_repair"
    }
  ];

  NavList.push({ divider: true });
  return NavList;
}
export default GetNavList;
