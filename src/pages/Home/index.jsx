import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate ,Outlet} from 'react-router-dom'
import items2 from '../mnueList'
const { Header, Content, Sider } = Layout;
const Home = () => {
  const Navigate = useNavigate();
  const onClick = (e) => {
    const { key } = e
    console.log(222, key, e)
    Navigate(key, {
      replace: true,
    })
  };
  return (
    <Layout style={{ height: '100%' }}>
      <Layout style={{ background: 'red' }}>
        <Sider width={200} className="site-layout-background" style={{ background: 'red' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/home/list']}
            defaultOpenKeys={['/home/list']}
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
export default Home