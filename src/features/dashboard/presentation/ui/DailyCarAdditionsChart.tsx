import React, { useRef, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const data = [
  { date: "2024-06-01", count: 2 },
  { date: "2024-06-02", count: 3 },
  { date: "2024-06-03", count: 1 },
  { date: "2024-06-04", count: 4 },
  { date: "2024-06-05", count: 3 },
  { date: "2024-06-06", count: 5 },
  { date: "2024-06-07", count: 2 },
];

const buttonStyle = {
  marginTop: 20,
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#45a049",
};

const DailyCarAdditionsChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const handleDownload = () => {
    if (!chartRef.current) return;

    html2canvas(chartRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "daily_car_additions_chart.png");
        }
      });
    });
  };

  return (
    <div style={{ width: "100%", height: 400, marginBottom: 100 }}>
      <h3 style={{ marginBottom: 40, marginTop: 50 }}>Daily Car Additions</h3>
      <div ref={chartRef} style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={handleDownload}
        style={{ ...buttonStyle, ...(hover ? buttonHoverStyle : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Download Chart
      </button>
    </div>
  );
};

export default DailyCarAdditionsChart;
