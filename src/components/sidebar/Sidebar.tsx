// src/components/Sidebar.tsx
import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  CarOutlined,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Sider width={200} className="site-layout-background">
      <div className="sidebar-header">
        <img src="/path-to-logo.png" alt="Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">Admin Panel</h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/cars" icon={<CarOutlined />}>
          <Link to="/cars">Cars</Link>
        </Menu.Item>
        <Menu.Item key="/analytyca" icon={<BarChartOutlined />}>
          <Link to="/analytyca">Analytyca</Link>
        </Menu.Item>
        <Menu.Item key="/car-analytyca" icon={<CarOutlined />}>
          <Link to="/car-analytyca">Cars Analitica</Link>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="/settings" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
