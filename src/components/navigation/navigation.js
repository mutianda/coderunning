import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import './navigation.less'
import MyIcon from '../icon'
class Navigation extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    componentDidMount() {
        console.log(this.props.location);

    }
    render() {
        return (
            <div className="nav-bottom" style={{height:(this.props.height||'40px'), width:(this.props.width||'100%')}}>
                <div className="nav-item"><Link to="/home"><MyIcon type="icon-caidan06" className="nav-icon"/></Link></div>
                <div className="nav-item"><Link to="/register"><MyIcon type="icon-zuire" className="nav-icon"/></Link></div>
                <div className="nav-item"><Link to="/register"><MyIcon type="icon-xinbaniconshangchuan-" className="nav-icon"/></Link></div>
                <div className="nav-item"><Link to="/login"><MyIcon type="icon-guanzhu" className="nav-icon"/></Link></div>
                <div className="nav-item"><Link to="/user"><MyIcon type="icon-wode" className="nav-icon"/></Link>
                </div>
            </div>
        )
    }


}
export default Navigation
