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

    handleDelete=()=>{
        //receive 'empid' here somehow and then setState after removing the 'empid details'
        console.log("Deleting Data...");
    }
    

    render(){
    return(
        <React.Fragment>
            <button type="button" className="m-1 btn btn-info" onClick={() => this.setModal1Visible(true)}>Edit</button>
            <button type="button" className="m-1 btn btn-danger" onClick={()=>this.handleDelete()}>Delete</button>

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