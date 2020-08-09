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
                >
                    <Form.Item label="Name:">
                    <Input />
                    </Form.Item>
                    <Form.Item label="Gender:">
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="prefer">Prefer Not Answering</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label="Age:">
                    <Input />
                    </Form.Item>
                    <Form.Item label="Designation:">
                    <Input />
                    </Form.Item>
                    <Form.Item label="Department:">
                    <Input />
                    </Form.Item>
                    <Form.Item label="Join Date:">
                    <DatePicker />
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

export default InpForm;