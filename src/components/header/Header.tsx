// src/components/Header.tsx
import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, MailOutlined, BellOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./header.css";

const Header: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchFocus = () => {
    setSearchActive(true);
  };

  const handleSearchBlur = () => {
    setSearchActive(false);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }} // Increased duration
        >
          Salam Halil
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }} // Increased duration
          className="header-left-text"
        >
          At-araba nesip etsin
        </motion.p>
      </div>
      <div className="header-right">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }} // Increased duration
        >
          <Input
            className={`search-bar ${searchActive ? "active" : ""}`}
            placeholder="Gözleg..."
            prefix={<SearchOutlined />}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }} // Increased duration and delay
        >
          <MailOutlined className="header-icon" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} // Increased duration and delay
        >
          <BellOutlined className="header-icon" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }} // Increased duration and delay
          className="profile"
        >
          <img
            src="/path-to-avatar-image.png"
            alt="Profile"
            className="avatar"
          />
          <div className="profile-info">
            <p className="profile-name">Halil</p>
            <p className="profile-profession">Developer</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
