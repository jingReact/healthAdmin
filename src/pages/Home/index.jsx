import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate ,Outlet} from 'react-router-dom'
const { Header, Content, Sider } = Layout;

const items2 = [
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
const Home = () => {
  const Navigate = useNavigate()
  const onClick = (e) => {
    const { key } = e
    console.log(222, key, e)
    Navigate(key, {
      replace: true,
    })
  };
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              background: '#ddd'
            }}
            items={items2}
            onClick={(e) => onClick(e)}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff'
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default Home;