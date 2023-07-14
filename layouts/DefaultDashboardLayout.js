// import node module libraries
import { useState } from 'react';

import NavbarTop from './navbars/NavbarTop';
// import sub components
import NavbarVertical from './navbars/NavbarVertical';

const DefaultDashboardLayout = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };
  return (
    <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
      <div className="navbar-vertical navbar">
        <NavbarVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
        />
      </div>
      <div id="page-content">
        <div className="header">
          <NavbarTop
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default DefaultDashboardLayout;
