import React from 'react';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import {connect} from 'react-redux'
import {Link,withRouter } from "react-router-dom";
import './style.scss'
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="desktop" />
                <span>
                <Link to="/">Main</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="search" />
                <span>
                <Link to="/search">Search</Link>
                </span>
              </Menu.Item>   
              <Menu.Item key="3">
                <Icon type="book" />
                 <span>
                <Link to="/favorite">Favorite<span className={'counter'}>{this.props.booksCount}</span></Link>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  
export default withRouter(connect((state) => ({
  booksCount: state.books.favoritesBooks.length || 0
}))(SiderDemo))