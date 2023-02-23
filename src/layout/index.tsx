import React, { useEffect } from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate, useLocation, useOutlet } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import './index.less'

const { Header, Content, Sider } = Layout
const menuList = [
  {
    name: '首页',
    path: '/home',
    key: '/home',
    icon: UserOutlined,
  },
  {
    name: '详情',
    path: '/details',
    key: '/details',
    icon: LaptopOutlined,
  },
  {
    name: 'three案例',
    path: '/threeDome',
    key: '/threeDome',
    icon: LaptopOutlined,
  },
  {
    name: '404',
    path: '/404',
    key: '/404',
    icon: NotificationOutlined,
  },
  {
    name: '其他',
    path: '/other',
    key: '/other',
    icon: LaptopOutlined,
  },
]
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

const items2: MenuProps['items'] = menuList.map((item, index) => {
  return {
    key: item.key,
    icon: React.createElement(item.icon),
    label: item.name,
    // children: new Array(4).fill(null).map((_, j) => {
    //   return {
    //     key: item.key,
    //     label: item.name,
    //   }
    // }),
  }
})

const App: React.FC = () => {
  const navigate = useNavigate()
  const Outlet = useOutlet()
  const location = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const changeMenuItem = (item: any) => {
    // console.log(item, 'itemitemitemitemitem')
  }
  const clickSubMenu = ({ key }: { key: string | number }) => {
    navigate(`${key}`)
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout className="mainlayout">
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={changeMenuItem}
            onSelect={clickSubMenu}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <React.Suspense fallback={<div>loading...</div>}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {Outlet}
            </Content>
          </React.Suspense>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
