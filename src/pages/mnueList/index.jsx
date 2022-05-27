import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

 const  items2 = [
        {
            key: '/home/list',
            icon: React.createElement(UserOutlined),
            label: '首页',
        },
        {
            key: '/home/dingdan',
            icon: React.createElement(UserOutlined),
            label: '订单管理',
            children: [
                {
                    key: '/home/dingdan1',
                    label: '订单详情',
                },
                {
                    key: '/home/dingdan2',
                    label: '订单管理',
                },
                {
                    key: '/home/dingdan3',
                    label: '订单打印预览',
                }
            ]
        },
        {
            key: '/home/zhifu',
            icon: React.createElement(UserOutlined),
            label: '支付管理',
            children: [
                {
                    key: '/home/zhifu1',
                    label: '支付交易',
                },
                {
                    key: '/home/zhifu2',
                    label: '交易中心',
                },
                {
                    key: '/home/zhifu3',
                    label: '账单流水',
                }
            ]
        },

        {
            key: '/home/yhgl',
            icon: React.createElement(UserOutlined),
            label: '用户管理',
            children: [
                {
                    key: '/home/yhgl1',
                    label: '用户中心',
                },
                {
                    key: '/home/yhgl2',
                    label: '用户明显',
                }
            ]
        },
        {
            key: '/home/jiaose',
            icon: React.createElement(UserOutlined),
            label: '角色管理',
            children: [
                {
                    key: '/home/jiaose1',
                    label: '角色管理',
                }
            ]
        }
    ]

export default items2