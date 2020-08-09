import React from 'react';

const Button=()=>{
    return(
        <React.Fragment>
            <button type="button" class="m-1 btn btn-info">Edit</button>
            <button type="button" class="m-1 btn btn-danger">Delete</button>
        </React.Fragment>
    );
}

export default Button;