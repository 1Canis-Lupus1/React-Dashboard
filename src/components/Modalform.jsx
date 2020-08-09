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

        console.log(values.gender);
        console.log(values.date);
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
                    <Form.Item label="Name:" name='name' rules={[{required: true, message: "Select Name",},]}>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Gender:" name='gender'>
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="prefer">Prefer Not Answering</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label="Age:" name='age'>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Designation:" name='designation'>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Department:" name='department'>
                    <Input />
                    </Form.Item>
                    <Form.Item label="Join Date:" name='date'>
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