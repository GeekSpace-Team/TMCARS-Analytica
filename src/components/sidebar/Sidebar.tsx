// src/components/Sidebar.tsx
import React from "react";
import { Layout, Menu } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Sider width={200} className="site-layout-background">
      <div className="sidebar-header">
        <img
          src="/images/GeekSpaceLogo.svg"
          alt="Logo"
          className="sidebar-logo"
        />
        <h1 className="sidebar-title">Admin Panel</h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {/* <Menu.Item key="/" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item> */}
        <Menu.Item key="/" icon={<CarOutlined />}>
          <Link to="/">Cars</Link>
        </Menu.Item>
        <Menu.Item key="/cars-statistica" icon={<CarOutlined />}>
          <Link to="/cars-statistica">Cars Statistica</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
