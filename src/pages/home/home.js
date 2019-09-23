import React from 'react'
import {Input ,Tooltip, Icon } from 'antd'
import Header from '../../components/header/header'
import './home.less'
class Home extends React.Component{
    render() {
        return (
            <div className='home-page'>
                <div className="top-box">
                    <Header height={'50px'} width={'50px'}/>
                    <Input
                        placeholder="Enter your username"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                            <Tooltip title="Extra information">
                                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                    <br />
                    <br />
                </div>

                首页
            </div>
        );
    }
}

export default Home
