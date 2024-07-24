import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Spin } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import {
  Analytica,
  Cars,
  Dashboard,
  Settings,
  Users,
  CarsAnalitica,
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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/analytyca" element={<Analytica />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/car-analytyca" element={<CarsAnalitica />} />
              </Routes>
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
