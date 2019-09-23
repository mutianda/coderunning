import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import logo from '../../static/images/imgs/logo.png';
class Logo extends React.Component {
    render() {
        return (
            <div className="App-header" style={{height:(this.props.height||'100px'), width:(this.props.width||'100px')}}>
            <img src={logo} className="App-logo" alt="logo" style={{height:(this.props.height||'100px'), width:(this.props.width||'100px')}}/>
        </div>)
    }

}
export default Logo
