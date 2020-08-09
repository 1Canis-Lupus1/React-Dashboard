import React,{ Component } from 'react';

class Table extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <React.Fragment>
                <table class="table table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Available</th>
                    <th scope="col">View Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Emp 1</th>
                    <td>Frontend Development</td>
                    <td>--checkbox here--</td>
                    <td>edit and delete button</td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 2</th>
                    <td>Backend Development</td>
                    <td></td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 3</th>
                    <td>Testing</td>
                    <td></td>
                    <td>@twitter</td>
                    {/* <td colspan="2">Larry the Bird</td> */}
                    </tr>
                    <tr>
                    <th scope="row">Emp 4</th>
                    <td>Deployment</td>
                    <td></td>
                    <td>@fat</td>
                    </tr>
                </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Table;