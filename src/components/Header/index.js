import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';

import logo from './logo.png';
import './style.css';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.changeClass = this.changeClass.bind(this);
        this.state = {
            list: []
        }
    }

    getMenuItems() {
        return this.state.list.map(items => {
            let i = items.key;
            return (
                <Menu.Item key={items.key} data-n={items.key} icon={<MailOutlined />}>
                    <Link to={`/${items.key}`}>
                        {items.label}
                    </Link>
                </Menu.Item>
            );
        });
    }

    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/09eff2e40d061428948d568ab762c6bf/weixin/api/getNewsNav').then((res) => {
            this.setState({
                list: res.data.list
            })
        })
    }

    changeClass(){
        document.querySelector('.ant-menu-item-selected').classList.remove('ant-menu-item-selected');
    }

    render() {
        return (
            <Fragment>
                <Link to='/'><img src={logo} className="app-header-logo" onClick={this.changeClass}/></Link>
                <Menu mode="horizontal" defaultSelectedKeys={['mail']} className="app-header-menu">{this.getMenuItems()}</Menu>
            </Fragment>
        )
    }
}

export default withRouter(AppHeader);