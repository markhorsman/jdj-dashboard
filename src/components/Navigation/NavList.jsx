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
      to: "/stock_rent"
    },
    {
      primaryText: "Overzicht verkoop artikelen",
      leftIcon: <FontIcon>store</FontIcon>,
      component: Link,
      to: "/stock_sale"
    },
    {
      primaryText: "Overzicht reparatie artikelen",
      leftIcon: <FontIcon>build</FontIcon>,
      component: Link,
      to: "/stock_repair"
    }
  ];

  NavList.push({ divider: true });
  return NavList;
}
export default GetNavList;
