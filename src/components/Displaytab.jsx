import React,{ Component } from 'react';
import Button from './Button';

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
                    <td><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Checkbox
                        </label>
                        </div>
                    </td>
                    <td><Button /></td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 2</th>
                    <td>Backend Development</td>
                    <td><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Checkbox
                        </label>
                        </div>
                    </td>
                    <td><Button /></td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 3</th>
                    <td>Testing</td>
                    <td><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Checkbox
                        </label>
                        </div>
                    </td>
                    <td><Button /></td>
                    {/* <td colspan="2">Larry the Bird</td> */}
                    </tr>
                    <tr>
                    <th scope="row">Emp 4</th>
                    <td>Deployment</td>
                    <td><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Checkbox
                        </label>
                        </div>
                    </td>
                    <td><Button /></td>
                    </tr>
                </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Table;