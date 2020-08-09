import React,{ Component } from 'react'

class AddEmp extends Component{
    constructor(){
        super();

        this.state={
            avail: 0,
            total: 0
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="m-5 card">
                <div class="card-header">
                    <span className='badge badge-success'>Dashboard</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Available Employees: {this.state.avail}</h5>
                    <h5 class="card-title">Total Employees: {this.state.total}</h5>
                    <a href="#" class="btn btn-primary"><strong>+</strong> Add Employee</a>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddEmp;