// Lower Component(Table)

import React,{ Component } from 'react';
import ButtonFnc from './Button';
import { Modal, Button } from 'antd';
import InpForm from './Modalform';

class Table extends Component{
    constructor(){
        super();
        this.state={
            modal1Visible: false,
            Emp:[]
        }
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }

    componentDidUpdate(){
        let n=sessionStorage.length;
        for(let i=0;i<n;i++){
            console.log(sessionStorage.getItem('empid'));
        }
    }

    render(){
        return (
            <React.Fragment>
                <table className="m-1 table table-hover table-dark">
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
                    <td><div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1"></label>
                        </div>
                    </td>
                    <td><ButtonFnc /></td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 2</th>
                    <td>Backend Development</td>
                    <td><div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1"></label>
                        </div>
                    </td>
                    <td><ButtonFnc /></td>
                    </tr>
                    <tr>
                    <th scope="row">Emp 3</th>
                    <td>Testing</td>
                    <td><div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1"></label>
                        </div>
                    </td>
                    <td><ButtonFnc /></td>
                    {/* <td colspan="2">Larry the Bird</td> */}
                    </tr>
                    <tr>
                    <th scope="row">Emp 4</th>
                    <td>Deployment</td>
                    <td><div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1"></label>
                        </div>
                    </td>
                    <td><ButtonFnc /></td>
                    </tr>
                </tbody>
                </table>

                {/* Antd Modal */}
                <Modal
                title="Add Employee"
                style={{ top: 20 }}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
                >
                <InpForm />
                </Modal>
            </React.Fragment>
        )
    }
}

export default Table;