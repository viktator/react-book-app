import React, {useaState, useState} from 'react'
import {Layout, Menu, Breadcrumb, Icon,} from 'antd'
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom"
import './style.scss'
import PropTypes from 'prop-types'


const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

const SiderDemo = ({booksCount, children}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed({collapsed})
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
            >
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="desktop"/>
                        <span>
                <Link to="/">Main</Link>
                </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="search"/>
                        <span>
                <Link to="/search">Search</Link>
                </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="book"/>
                        <span>
                <Link to="/favorite">Favorite<span className={'counter'}>{booksCount}</span></Link>
                </span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{margin: '0 16px'}}>
                    {children}
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );

};

SiderDemo.propTypes = {
    booksCount: PropTypes.number

};

export default withRouter(connect((state) => ({
    booksCount: state.books.favoritesBooks.length || 0
}))(SiderDemo))