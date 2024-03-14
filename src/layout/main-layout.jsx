import React from 'react'
 import {
   LaptopOutlined,
   NotificationOutlined,
   TruckOutlined,
   DollarOutlined
 } from "@ant-design/icons"; 
import { Layout, Menu } from "antd";
import { Link, Outlet } from 'react-router-dom';
import "./style-main.scss"

 const { Header, Content, Sider } = Layout;

 const sideBare = [
   {
     key: 1,
     icon: <TruckOutlined />,
     label: "Avtomobillar",
     children: [
       {
         key: 11,
         icon: <DollarOutlined />,
         label: <Link to={"/"}>Avtomobil</Link>,
       },
     ],
   },
   {
     key: 2,
     icon: <NotificationOutlined />,
     label: "O'yinchoqlar",
     children: [
       {
         key: 12,
         icon: <DollarOutlined />,
         label: <Link to={"/cart1"}>O'yinchoqlar</Link>,
       },
     ],
   },
   {
     key: 3,
     icon: <LaptopOutlined />,
     label: "Noutbuk",
     children: [
       {
         key: 13,
         icon: <DollarOutlined />,
         label: <Link to={"/cart2"}>Noutbuk</Link>,
       },
     ],
   },
 ];

 const items2 = sideBare.map((item) => {
  
   return {
     key: item.key,
     icon: item.icon,
     label: item.label,

     children: item.children.map((child) => {
       return {
         key: child.key,
         icon: child.icon,
         label: child.label,
       };
     }),
   };
 });

export const MainLayout = () => {
  return (
    <div className='main__layout'>
      <Layout style={{height:"100vh"}}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
