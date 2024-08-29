import { FC, useState, useEffect } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DownArrow: FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      type="primary"
      shape="circle"
      icon={isAtBottom ? <UpOutlined /> : <DownOutlined />}
      onClick={isAtBottom ? scrollToTop : scrollToBottom}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 1000,
      }}
    />
  );
};

export default DownArrow;
