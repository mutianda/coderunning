import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,message } from 'antd';
import { Link ,  withRouter} from 'react-router-dom'
import './login.less'
import Logo from '../../components/header/header'
class NormalLoginForm extends React.Component {
    constructor() {
        //定义参数
        super();
        this.state = {height:'150px',width:'150x'}
    }
        handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Received values of form: ', values);
            }else {
                if(values.username ==='admin'&& values.password==='123'){
                    this.props.history.push('/home')

                }else {
                    console.log('账号密码错误 ', values);
                    message.error('账号密码错误');

                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Logo height={this.state.height} width={this.state.width}></Logo>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,

                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })
                    (<Checkbox>记住密码</Checkbox>)}
                    <span className="login-form-forgot" style={{marginLeft:'20px'}}>
                        忘记密码？
                    </span>


                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    <Button type="success" htmlType="submit" className="login-form-button">
                        <span><Link to="/register">register!</Link></span>
                    </Button>
                </Form.Item>
                <Form.Item>

                </Form.Item>
            </Form>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login
