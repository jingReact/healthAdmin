import { Menu } from 'antd';
import React, { Component } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import './inex.css'
const img1=require('../../assets/images/icon_yiju.png')

function menu() {
    return (
        <div >
    <div className='menu'>
        <img src={img1} className='img1'></img>
            <span className='tittle'>医疗救治系统</span>
        </div>
            <Menu
                style={{ height: '100%' }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: '首页',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: '商品分类',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: '账单中心',
                    },
                    {
                        key: '4',
                        icon: <UploadOutlined />,
                        label: '交易流水',
                    },
                    {
                        key: '5',
                        icon: <UploadOutlined />,
                        label: '订单管理',
                    },
                    {
                        key: '6',
                        icon: <UploadOutlined />,
                        label: '个人中心',
                    },
                    {
                        key: '7',
                        icon: <UploadOutlined />,
                        label: '用户注册',
                    },
                    {
                        key: '8',
                        icon: <UploadOutlined />,
                        label: '权限管理',
                    },
                    {
                        key: '9',
                        icon: <UploadOutlined />,
                        label: '统计分析表',
                    },
                ]}
            />
        </div>
    )
}
export default menu