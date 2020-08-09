// Middle Component(Dashboard)

import React,{ Component } from 'react';
import { Modal, Button } from 'antd';
import InpForm from './Modalform';

class AddEmp extends Component{
    constructor(){
        super();

        this.state={
            avail: 0,
            total: 0,
            modal1Visible: false
        }
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }

    render(){
        return(
            <React.Fragment>
                <div className="m-5 card">
                <div className="card-header">
                    <span className='badge badge-success'>Dashboard</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Available Employees: {this.state.avail}</h5>
                    <h5 className="card-title">Total Employees: {this.state.total}</h5>
                    <button type="button" className="btn btn-primary" onClick={() => this.setModal1Visible(true)}><strong>+</strong> Add Employee</button>
                </div>
                </div>

                {/* Antd Modal */}
                <Modal
                title="Add Employee"
                style={{ top: 20 }}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
                footer={null}                >
                <InpForm />
                </Modal>
                
            </React.Fragment>
        )
    }
}

export default AddEmp;