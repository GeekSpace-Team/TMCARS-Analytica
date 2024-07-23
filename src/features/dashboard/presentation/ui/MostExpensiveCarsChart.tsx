import React, { useRef } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const data = [
  { car: "Ferrari LaFerrari", price: 2000000 },
  { car: "Bugatti Chiron", price: 3000000 },
  { car: "Pagani Huayra", price: 2500000 },
  { car: "Koenigsegg Jesko", price: 2800000 },
  { car: "Lamborghini Veneno", price: 4000000 },
  { car: "McLaren Speedtail", price: 2500000 },
  { car: "Aston Martin Valkyrie", price: 3500000 },
  { car: "Rolls-Royce Sweptail", price: 13000000 },
  { car: "Lykan HyperSport", price: 3400000 },
  { car: "Maybach Exelero", price: 8000000 },
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

const MostExpensiveCarsChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = React.useState(false);

  const handleDownload = () => {
    if (!chartRef.current) return;

    html2canvas(chartRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "most_expensive_cars_chart.png");
        }
      });
    });
  };

  return (
    <div style={{ width: "100%", height: 500 }}>
      <h3 style={{ marginBottom: 20, marginTop: 20 }}>
        Top 10 Most Expensive Cars
      </h3>
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Bar dataKey="price" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="car" />
            <YAxis />
            <Tooltip />
          </BarChart>
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

export default MostExpensiveCarsChart;
