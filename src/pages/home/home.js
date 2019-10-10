import React from 'react'
import {Input ,Tooltip, List, Avatar,  Icon,Tabs, Radio, message, Spin  } from 'antd'
import Header from '../../components/header/header'
import './home.less'
import NavTab from '../../components/navigation/navigation'
import MyIcon from '../../components/icon'
import axios from 'axios'

import InfiniteScroll from 'react-infinite-scroller';
import store from '../../store/createStore'
const fakeDataUrl = 'http://test.mutianda.com/index.php';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            user: store.getState().user,
            mode: 'top',
            tabLsit: [
                {tabName: '前端', id: 1},
                {tabName: 'Vue', id: 2},
                {tabName: 'React', id: 3},
                {tabName: 'Node', id: 4},
                {tabName: 'Python', id: 5},
                {tabName: 'Java', id: 6},
                {tabName: 'PHP', id: 7}
            ],
            data: [],
            loading: false,
            hasMore: true,
        }
        this.handleInputFocused = this.handleInputFocused.bind(this)
        this.handleInputOnBlur = this.handleInputOnBlur.bind(this)
    }
        componentDidMount(){
            this.fetchData(res => {
                this.setState({
                    data: res.results,
                });
            });
        }
        fetchData () {
            axios({
                url: fakeDataUrl,
                type: 'json',
                method: 'get',
                contentType: 'application/json',
            }).then(res=>{
                let { data } = this.state;
                console.log(res)
                data = data.concat(res.data.res.recom);
                this.setState({
                    data,
                    loading: false,
                });
            })
        };

        handleInfiniteOnLoad = () => {
            let { data } = this.state;
            this.setState({
                loading: true,
            });
            if (data.length > 14) {
                message.warning('Infinite List loaded all');
                this.setState({
                    hasMore: false,
                    loading: false,
                });
                return;
            }
            this.fetchData();
        }
        changeTab(tabName){
            console.log(tabName)
        }
    render() {
        const { Search } = Input;
        const { TabPane } = Tabs;
        const mode = this.state.mode
        const IconText = ({ type, text }) => (
            <span>
    <Icon type={type} style={{ marginRight: 8 }} />
                {text}
  </span>
        );
        const DesBox = (des)=>(
            <span>
                {des}
            </span>
        );
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
                        <Tabs defaultActiveKey="1" tabPosition={mode}
                              style={{ height: 220 }}
                              onChange={this.changeTab.bind(this)}>
                        {this.state.tabLsit.map(i => (
                            <TabPane tab={`${i.tabName}`} key={i.tabName}>
                            </TabPane>
                        ))}
                    </Tabs>

                    </div>
                    <div className="demo-infinite-container">
                        <InfiniteScroll
                            initialLoad={false}
                            pageStart={0}
                            loadMore={this.handleInfiniteOnLoad}
                            hasMore={!this.state.loading && this.state.hasMore}
                            useWindow={false}
                        >
                            <List
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <List.Item
                                        key={item.id}
                                        actions={[
                                                   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                                   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                                   <IconText type="message" text="2" key="list-vertical-message" />,
                                               ]}
                                    >
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={item.img} />
                                            }
                                            title={<a href="https://ant.design">{item.name}</a>}
                                            description={<div  className="desc-text">{item.des}</div>}
                                        />
                                        <div style={{padding:'0 10px'}}>
                                            <div className="handle-icon"><MyIcon type="icon-jiageguanxiguanli"/></div>
                                            <div className="handle-icon"><MyIcon type="icon-weibiaoti-_huabanfuben"/></div>

                                            <div className="handle-icon"><MyIcon type="icon-pingfen"/></div>

                                            <div className="handle-icon"><MyIcon type="icon-gouwuche"/></div>

                                        </div>
                                    </List.Item>
                                )}
                            >
                                {this.state.loading && this.state.hasMore && (
                                    <div className="demo-loading-container">
                                        <Spin />
                                    </div>
                                )}
                            </List>
                        </InfiniteScroll>
                    </div>
                </div>
                <NavTab/>
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
