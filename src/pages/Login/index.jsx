import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import './login.css'
const img = require('../../assets/images/icon_yiju.png')
const keft_img = require('../../assets/images/left_img.png')
const Login = () => {
    const onFinish = (values) => {
        
        console.log('Success:', values);
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
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='true'
                >
                    <div className='username denglu' >登陆</div>

                    <div className='username'>账号</div>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div className='username'>密码</div>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
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
        </div>
    );
};
export default Login;