import React from 'react'
import {Input ,Tooltip, Icon,Tabs, Radio } from 'antd'
import Header from '../../components/header/header'
import './home.less'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focused: false,
            mode:'top',
            tabLsit:[
                {tabName:'前端',id:1},
                {tabName:'Vue',id:2},
                {tabName:'React',id:3},
                {tabName:'Node',id:4},
                {tabName:'Python',id:5},
                {tabName:'Java',id:6},
                {tabName:'PHP',id:7}


            ]
        }
        this.handleInputFocused = this.handleInputFocused.bind(this)
        this.handleInputOnBlur = this.handleInputOnBlur.bind(this)
    }
    render() {
        const { Search } = Input;
        const { TabPane } = Tabs;
        const mode = this.state.mode
        return (
            <div className='home-page'>
                <div className="top-box">
                    <div className="logo">
                        <Header height={'50px'} width={'50px'}/>

                    </div>
                    <div className={this.state.focused?'search-box focused':'search-box'}>
                        <input placeholder="搜索" className="search-input" onFocus={this.handleInputFocused} onBlur={this.handleInputOnBlur}/>
                        <Icon type="search"  className="search-icon"/>
                    </div>
                    {/*<Search*/}
                    {/*    placeholder="input search text"*/}
                    {/*    onSearch={value => console.log(value)}*/}
                    {/*    style={{ width: 200 }}*/}
                    {/*/>*/}
                </div>
                <div className="body-box">
                    <div className="tabs-list">
                        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
                        {this.state.tabLsit.map(i => (
                            <TabPane tab={`${i.tabName}`} key={i.id}>
                                Content of tab {i.tabName}
                            </TabPane>
                        ))}
                    </Tabs>
                    </div>

                </div>
                首页
            </div>
        );
    }
    handleInputFocused(){
        this.setState({
            focused:true
        })

    }
    handleInputOnBlur(){
        this.setState({
            focused:false
        })
    }
}

export default Home
