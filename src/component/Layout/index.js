import React from 'react';
import Logo from './../../assets/images/burger-logo.png';

const Layout = (props) => {
    return( 
        <>
            <div className="tool-bar">
                <img src={Logo} className="site-logo" alt="MyBurger" />
            </div>
            {props.children}
        </>
    )
}

export default Layout;