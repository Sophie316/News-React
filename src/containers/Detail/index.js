import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';

import './detail.css';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'title',
            content:'content'
        }
    }

    render() {
        return (
            <Card
            title={this.state.title}
            bordered={true}
          >
            <div dangerouslySetInnerHTML={{__html:this.state.content}} className="detail-content"></div>
          </Card>
        );
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const url = `https://www.fastmock.site/mock/09eff2e40d061428948d568ab762c6bf/weixin/api/getNews/id=${id}`;
        axios.get(url).then(res=>{
            this.setState({
                title:res.data.title,
                content:res.data.content
            })
        })
    }
}

export default Detail;