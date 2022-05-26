import { Button, Checkbox, Divider, Form, Input, message } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { login } from '../../api/login'
import './login.css'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
const img = require('../../assets/images/icon_yiju.png')
const keft_img = require('../../assets/images/left_img.png')
const Login = (props) => {
    const pass = [{
        username: '123456',
        password: '123456',
    }]
    const [data, setData] = useState(pass)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            const v = await login()
            const { username, password } = values
            // if (username === 'admin' && password === 'admin') {
                navigate(`/home/list`, {
                    replace: false,
                    state: data
                })
            // }
            // else {
            //     message.warning('您的密码输入错误,请重新输入');
            // }
        } catch (e) {
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <header className='fotter'>
                <img src={img} className='fotter_img'></img>
                <h1 className='fotter_tittle'>湖北省医疗救治管理系统</h1>
            </header>
            <section className='action'>
                <img src={keft_img} className='section_img'></img>
                <Form
                    className='section_Form'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='username denglu' >登陆</div>
                    <div className='username'>账号</div>
                    <Form.Item
                        className='Item'
                        name="username"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        {/* <UserOutlined style={{ color: '#08c' }} className='iconClass' /> */}
                        <Input />
                    </Form.Item>
                    <div className='username'>密码</div>
                    <Form.Item
                        className='Item'
                        name="password"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        {/* <LockOutlined style={{ color: '#08c' }} className='iconClass' /> */}
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            span: 26,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className='subnit'>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </section>
            {/* <Outlet /> */}
        </div>
    );
};
export default Login;