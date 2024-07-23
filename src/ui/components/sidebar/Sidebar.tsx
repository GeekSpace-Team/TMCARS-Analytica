import { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  CarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.css";

interface SidebarProps {
  onSidebarToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to handle resize and update sidebar state
  const handleResize = () => {
    const isOpen = window.innerWidth > 768;
    setIsSidebarOpen(isOpen);
    onSidebarToggle(isOpen);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Call handleResize initially to set the correct state
    handleResize();
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={isSidebarOpen ? "sidebar" : "closeSidebar"}>
      <h2 className={isSidebarOpen ? "sidebar-title" : "sidebar-title hidden"}>
        Admin Panel
      </h2>
      <Menu mode="inline" theme="dark" inlineCollapsed={!isSidebarOpen}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/">
            <span className={isSidebarOpen ? "" : "hidden"}>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="reports" icon={<FileTextOutlined />}>
          <Link to="/reports">
            <span className={isSidebarOpen ? "" : "hidden"}>Reports</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="vehicles" icon={<CarOutlined />}>
          <Link to="/vehicles">
            <span className={isSidebarOpen ? "" : "hidden"}>Vehicles</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          <Link to="/settings">
            <span className={isSidebarOpen ? "" : "hidden"}>Settings</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
