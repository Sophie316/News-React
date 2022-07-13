import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import './style.css';

class Vip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.login ?
                        <div className='vip'>Vip</div> :
                        <Redirect to='/' />
                }
            </div>
        )
    }

    componentDidMount() {
        const logoutItem = document.getElementById('logout');
        if(logoutItem && logoutItem.innerHTML.includes('退 出')) {
            this.setState({
                login:true
            });
        }else {
            this.setState({
                login:false
            });
        }
        // const url = 'https://www.dell-lee.com/react/api/isLogin.json';
        // axios.get(url, { withCredentials: true }).then(res => {
        //     console.log(res.data.data.login);
        //     this.setState({
        //         login: res.data.data.login
        //     })
        // })
    }
}

export default Vip;