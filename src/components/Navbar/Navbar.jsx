import React from 'react';
import classes from'./Navbar.module.css';

const Nav = () => {
    return(
        <nav className={classes.nav}>
         <div className={classes.item}>
           <a href="/profile">Profile</a>
         </div>
         <div className={classes.item}>
          <a href="/dialogs">Message</a>
         </div>
         <div className={classes.item}>
          <a>News</a>
         </div>
         <div className={classes.item}>
          <a>Music</a>
         </div>
         <div className={`${classes.item} ${classes.active}`}>
          <a>Settings</a>
         </div>
      </nav>
    );
}
export default Nav;
