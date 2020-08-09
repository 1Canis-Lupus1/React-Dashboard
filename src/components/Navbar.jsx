import React from 'react';

const Navbar=()=>{
    return(
        <React.Fragment>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="https://www.logic-square.com">
                <img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png" width="55" height="55" alt="" />
                </a>
                <strong className="badge badge-warning">DASHBOARD</strong>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;