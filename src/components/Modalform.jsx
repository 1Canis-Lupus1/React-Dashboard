import React,{ Component } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber
  } from 'antd';

class InpForm extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    onFinish = values => {
        //console.log('Success:', values);
        if(sessionStorage.getItem('empid') === 0){
            sessionStorage.setItem('empid',1);
        }
        else{
            sessionStorage.setItem('empid',sessionStorage.getItem('empid')+1);
        }
        sessionStorage.setItem('empid',JSON.stringify([values.name,values.gender,values.age,values.department]));

        console.log(`Employee Name: ${values.name}`);
        console.log(`Employee Gender: ${values.gender}`);
        console.log(`Employee Age: ${values.age}`);
        console.log(`Employee Designation: ${values.designation}`);
        console.log(`Employee Department: ${values.department}`);
        console.log(`Employee Join Date: ${values.date}`);
      };

    render(){
        return (
            <React.Fragment>
                <Form
                    labelCol={{
                    span: 4,
                    }}
                    wrapperCol={{
                    span: 14,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item label="Name:" name='name' rules={[{required: true, message: "Enter Name",},]}>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Gender:" name='gender' rules={[{required: true, message: "Select Gender",},]}>
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="prefer">Prefer Not Answering</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label="Age:" name='age' rules={[{required: true, message: "Enter Age",},]}>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Desig. :" name='designation' rules={[{required: true, message: "Enter Designation",},]}>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Depart. :" name='department' rules={[{required: true, message: "Enter Department",},]}>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Join Date:" name='date' >
                    <DatePicker />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" style={{float:'right'}}>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

export default InpForm;