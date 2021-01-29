import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Navbar.module.css';

const Nav = () => {
    return(
        <nav className={classes.nav}>
         <div className={classes.item}>
           <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
         </div>
         <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
         </div>
         <div className={classes.item}>
          <a href='/news'>News</a>
         </div>
         <div className={classes.item}>
          <a href='/music'>Music</a>
         </div>
         <div className={`${classes.item} ${classes.active}`}>
          <a href='/settings'>Settings</a>
         </div>
      </nav>
    );
}
export default Nav;
