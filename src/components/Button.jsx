import React,{ Component } from 'react';
import { Modal, Button } from 'antd';
import InpForm from './Modalform';

class ButtonFnc extends Component{
    constructor(){
        super();
        this.state={
            modal1Visible:false,
            modal2Visible:false
        }
    }

    setModal1Visible=(modal1Visible)=> {
        this.setState({ modal1Visible });
      }

    render(){
    return(
        <React.Fragment>
            <button type="button" class="m-1 btn btn-info" onClick={() => this.setModal1Visible(true)}>Edit</button>
            <button type="button" class="m-1 btn btn-danger">Delete</button>

            {/* Antd Modal */}
            <Modal
                title="Add Employee"
                style={{ top: 20 }}
                footer={null}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
                >
                <InpForm />
                </Modal>
        </React.Fragment>
        );
    }
}

export default ButtonFnc;