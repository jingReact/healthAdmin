import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Outlet, useNavigate } from "react-router-dom";

import  {login} from '../../api/login'
import './login.css'
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons'

const img = require('../../assets/images/icon_yiju.png')
const keft_img = require('../../assets/images/left_img.png')
const Login = (props) => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        let params={
            userName:1111
        }
        login(params).then(res=>{
            console.log(res,666)
        })
        navigate(`/home`, {
            replace: false,
        })
        console.log(props, 900)
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
                        <UserOutlined style={{ color: '#08c' }} className='iconClass' />
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
                        <LockOutlined style={{ color: '#08c' }} className='iconClass' />
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
            <Outlet />
        </div>
    );
};
export default Login;