import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { List } from 'antd';

class AppList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <List
                size="large"
                bordered
                dataSource={this.state.data}
                renderItem={item =>
                    <List.Item>
                        <Link to={`/detail/${item.id}`}>{item.title}</Link>
                    </List.Item>
                }
            />
        );
    }

    componentDidMount() {
        // const id = this.props.match.params.id;
        const MountUrl = 'https://www.fastmock.site/mock/09eff2e40d061428948d568ab762c6bf/weixin/api/getNewsNav';
        axios.get(MountUrl).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const ID = nextProps.location.pathname.slice(1);
        const ReceiveUrl = `https://www.fastmock.site/mock/09eff2e40d061428948d568ab762c6bf/weixin/api/getNewsNav${ID}`;
        axios.get(ReceiveUrl).then((res) => {
            this.setState({
                data: res.data.data
            })
        })
    }
}

export default AppList;