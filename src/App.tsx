import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Spin } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import {
  Cars,
  CarsStatistica,
  Dashboard,
} from "./components/lazy/LazyComponent";

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Suspense
              fallback={
                <div style={{ textAlign: "center", marginTop: 50 }}>
                  <Spin size="large" />
                </div>
              }
            >
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars-statistica" element={<CarsStatistica />} />
              </Routes>
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
