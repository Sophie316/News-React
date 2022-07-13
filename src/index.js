import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import ReactDOM from 'react-dom/client';

import 'antd/dist/antd.css';
import './style.css';

import AppHeader from './components/Header/';
import Login from './components/Login/';
import AppList from './containers/List/';
import Detail from './containers/Detail/';
import Vip from './containers/Vip/';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1300 }}>
          <Header className="header"><AppHeader /></Header>
          <Content className="content">
            <Login />
            <Switch>
              <Route path='/vip' component={Vip} />
              <Route path='/detail/:id' component={Detail} />
              <Route path='/:id' component={AppList} />
              <Route path='/' component={AppList} />
            </Switch>
          </Content>
          <Footer className="footer">@copyright 111 2022</Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


