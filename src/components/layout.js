import React from 'react';
import { NavigationDrawer, SVGIcon, FontIcon, ListItem } from 'react-md';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import menu from '../../public/icons/menu.svg';
import arrowBack from '../../public/icons/arrow_back.svg';

import Header from './header'
import './layout.css'

const navItems = [{
    exact: true,
    label: 'Home',
    to: '/',
    icon: 'home',
}, {
    label: 'Page 1',
    to: '/page-1',
    icon: 'bookmark',
}, {
    label: 'Page 2',
    to: '/page-2',
    icon: 'donut_large',
}, {
    label: 'Page 3',
    to: '/page-3',
    icon: 'flight_land',
}];

const NavLink = ({ label, to, exact, icon }) => (
    <Link to={to}>
        {({ match }) => {
            let leftIcon;
            if (icon) {
                leftIcon = <FontIcon>{icon}</FontIcon>;
            }
            return (
                <ListItem
                    component={Link}
                    active={!!match}
                    to={to}
                    primaryText={label}
                    leftIcon={leftIcon}
                />
            );
        }}
    </Link>
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <NavigationDrawer
              // renderNode={renderNode}
              navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
              mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
              tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
              desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
              toolbarTitle="Hoofdmenu"
              // toolbarActions={<Button icon onClick={this.hide}>close</Button>}
              contentId="main-content"
              temporaryIcon={<SVGIcon use={menu.url} />}
              persistentIcon={<SVGIcon use={arrowBack.url} />}
              contentClassName="md-grid"
          >
          </NavigationDrawer>
        <div id="main-content"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="http://www.jdejonge.nl">J. de Jonge Group</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
