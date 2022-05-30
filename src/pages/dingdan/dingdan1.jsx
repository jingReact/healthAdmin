import React, { Component ,useState,useEffect} from 'react';
import { Col, Row, Card, Button, Table, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
function Dingdan1() {
    const [tittle, setv] = useState('一级菜单')
    const [columns, setC] = useState(
            [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name1',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age1',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address1',
                },
                {
                    title: '操作',
                    with: 100,
                    render: (v) => (
                        <span>
                            <span style={{ color: 'skyblue' }} onClick={() => { Click(v, 2) }}>修改分类</span>
                            <div style={{ display: 'inline-block', width: '10px' }}></div>
                            <span style={{ color: 'skyblue' }} onClick={() => { Click(v, 1) }}>查看子分类</span>
                        </span>
                    )
                },
        ]
    )
    const [dataSource, setD] = useState([
        {
            key: '0',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ])
    const btn = (
        <Button type='primary'>
            {/* <Icon type='plus' /> */}
            添加
        </Button>
    )
   
    function Click(v, m) {
        if (m == 1) {
            if (v.address) setv(v.address)
            setC([
                {
                    title: '子类1',
                    dataIndex: 'ZL1',
                    key: 'name',
                },
                {
                    title: '性别',
                    dataIndex: 'XINBIE',
                    key: 'age',
                },
                {
                    title: '年纪',
                    dataIndex: 'AGE',
                    key: 'address',
                },
                {
                    title: '爱好',
                    dataIndex: 'GOBBY',
                    key: 'address',
                },
                {
                    title: '操作',
                    with: 100,
                    render: (v) => (
                        <span>
                            <span style={{ color: 'skyblue' }} onClick={() => { Click(v, 2) }}>修改分类</span>
                            <div style={{ display: 'inline-block', width: '10px' }}></div>
                            <span style={{ color: 'skyblue' }} onClick={() => { Click(v, 1) }}>查看子分类</span>
                        </span>
                    )
                },
            ]) 
            setD([
                {
                    key: '1',
                    ZL1: 'HHH',
                    XINBIE: '男',
                    AGE: '12',
                    GOBBY:'女'
                },
                {
                    key: '2',
                    ZL1: 'cc',
                    XINBIE: '男',
                    AGE: '19',
                    GOBBY: '女'
                },
            ])
        } else {
           
       }
      console.log(v,m,99)
    }
    return (
        <Card
            title={tittle}
            extra={btn}
            style={{
                marginTop: '30px'
            }}
        >
            <Table rowKey='key' bordered dataSource={dataSource} columns={columns} />;
        </Card>
    );
}

export default Dingdan1