import React, { Component } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { Link , withRouter } from 'react-router-dom';
import axios from 'axios';

import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            login: false,
            modal: false,
            user: '',
            password: ''
        }
    }

    showModal() {
        this.setState({
            modal: true
        })
    }
    hideModal() {
        this.setState({
            modal: false
        })
    }
    changeUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    checkLogin() {
        const { user, password } = this.state;
        const url = `https://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`;
        axios.defaults.withCredentials = true;
        axios.get(url).then(res => {
            if (res.data.data.login) {
                message.success('登陆成功');
                this.setState({
                    login: true,
                    modal: false
                })
            } else {
                message.error('登陆失败');
            }
        })
    }
    componentDidMount() {
        const url = 'https://www.dell-lee.com/react/api/isLogin.json';
        axios.defaults.withCredentials = true;
        axios.get(url).then(res => {
            this.setState({
                login: res.data.data.login
            })
        })
    }
    logout() {
        const url = 'https://www.dell-lee.com/react/api/logout.json';
        axios.defaults.withCredentials = true;
        axios.get(url).then(res => {
            if (res.data.data.logout) {
                this.setState({
                    login: false
                })
            };
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.login ?
                        <Button type="primary" className='login-btn' onClick={this.logout} id="logout">退出</Button> :
                        <Button type="primary" className='login-btn' onClick={this.showModal}>登录</Button>
                }
                <Link to='/vip'>
                    <Button type="primary" className='vip-btn'>Vip</Button>
                </Link>
                <Modal title="登录" visible={this.state.modal} onOk={this.checkLogin} onCancel={this.hideModal}>
                    <Input placeholder="请输入用户名" className='login-input-username'
                        value={this.state.user} onChange={this.changeUser} />
                    <Input placeholder="请输入密码" type='password'
                        value={this.state.password} onChange={this.changePassword} />
                </Modal>
            </div>
        );
    }

}

export default withRouter(Login);