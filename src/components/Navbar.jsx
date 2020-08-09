// Top component(Navbar)

import React from 'react';

const Navbar=()=>{
    return(
        <React.Fragment>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="https://www.logic-square.com">
                <img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png" width="55" height="55" alt="" />
                </a>
                <span className="badge badge-light"><input type="text" placeholder="Employee Name" /><button className="m-1 btn btn-outline-primary btn-sm">Search</button></span>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;