import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// Lazy load pages
const Sidebar = lazy(() => import("./ui/components/sidebar/Sidebar"));
const Dashboard = lazy(
  () => import("./features/dashboard/presentation/ui/Dashboard")
);
const Reports = lazy(
  () => import("./features/reports/presentation/ui/Reports")
);
const Vehicles = lazy(
  () => import("./features/vehicles/presentation/ui/Vehicles")
);
const Settings = lazy(
  () => import("./features/settings/presentation/ui/Settings")
);

import { Layout } from "antd";
const { Content } = Layout;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar onSidebarToggle={handleSidebarToggle} />
        </Suspense>
        <Layout
          className="site-layout"
          style={{ marginLeft: isSidebarOpen ? 200 : 120 }}
        >
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
