import React, { useState, useEffect, useRef } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Sample data with historical prices
const cars = [
  {
    brand: "Ferrari",
    model: "LaFerrari",
    year: 2015,
    color: "Red",
    prices: [
      { date: "2024-06-01", price: 2000000 },
      { date: "2024-06-10", price: 2100000 },
      { date: "2024-06-20", price: 2200000 },
    ],
  },
  {
    brand: "Bugatti",
    model: "Chiron",
    year: 2016,
    color: "Blue",
    prices: [
      { date: "2024-06-01", price: 3000000 },
      { date: "2024-06-10", price: 3100000 },
      { date: "2024-06-20", price: 3200000 },
    ],
  },
  {
    brand: "Pagani",
    model: "Huayra",
    year: 2017,
    color: "Black",
    prices: [
      { date: "2024-06-01", price: 2500000 },
      { date: "2024-06-10", price: 2550000 },
      { date: "2024-06-20", price: 2600000 },
    ],
  },
  {
    brand: "Koenigsegg",
    model: "Jesko",
    year: 2018,
    color: "White",
    prices: [
      { date: "2024-06-01", price: 2800000 },
      { date: "2024-06-10", price: 2850000 },
      { date: "2024-06-20", price: 2900000 },
    ],
  },
  {
    brand: "Lamborghini",
    model: "Veneno",
    year: 2019,
    color: "Green",
    prices: [
      { date: "2024-06-01", price: 4000000 },
      { date: "2024-06-10", price: 4050000 },
      { date: "2024-06-20", price: 4100000 },
    ],
  },
  {
    brand: "McLaren",
    model: "Speedtail",
    year: 2020,
    color: "Silver",
    prices: [
      { date: "2024-06-01", price: 2500000 },
      { date: "2024-06-10", price: 2550000 },
      { date: "2024-06-20", price: 2600000 },
    ],
  },
  {
    brand: "Aston Martin",
    model: "Valkyrie",
    year: 2021,
    color: "Blue",
    prices: [
      { date: "2024-06-01", price: 3500000 },
      { date: "2024-06-10", price: 3550000 },
      { date: "2024-06-20", price: 3600000 },
    ],
  },
  {
    brand: "Rolls-Royce",
    model: "Sweptail",
    year: 2022,
    color: "Black",
    prices: [
      { date: "2024-06-01", price: 13000000 },
      { date: "2024-06-10", price: 13100000 },
      { date: "2024-06-20", price: 13200000 },
    ],
  },
  {
    brand: "Lykan",
    model: "HyperSport",
    year: 2023,
    color: "Red",
    prices: [
      { date: "2024-06-01", price: 3400000 },
      { date: "2024-06-10", price: 3450000 },
      { date: "2024-06-20", price: 3500000 },
    ],
  },
  {
    brand: "Maybach",
    model: "Exelero",
    year: 2024,
    color: "White",
    prices: [
      { date: "2024-06-01", price: 8000000 },
      { date: "2024-06-10", price: 8050000 },
      { date: "2024-06-20", price: 8100000 },
    ],
  },
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

const CarFilterComponent: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const chartRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const handleDownload = () => {
    if (!chartRef.current) return;

    html2canvas(chartRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "filtered_cars_price_chart.png");
        }
      });
    });
  };

  const handleFilterChange = () => {
    let filtered = cars;
    if (brand) filtered = filtered.filter((car) => car.brand === brand);
    if (model) filtered = filtered.filter((car) => car.model === model);
    if (year) filtered = filtered.filter((car) => car.year.toString() === year);
    if (color) filtered = filtered.filter((car) => car.color === color);
    if (startDate && endDate) {
      filtered = filtered
        .map((car) => ({
          ...car,
          prices: car.prices.filter(
            (price) =>
              new Date(price.date) >= startDate &&
              new Date(price.date) <= endDate
          ),
        }))
        .filter((car) => car.prices.length > 0);
    }
    setFilteredCars(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [brand, model, year, color, startDate, endDate]);

  // Aggregate prices for the chart
  const chartData = filteredCars.flatMap((car) =>
    car.prices?.map((price) => ({
      date: price.date,
      price: price.price,
      car: `${car.brand} ${car.model}`,
    }))
  );

  return (
    <div style={{ width: "100%", height: "100%", padding: 20 }}>
      <h3 style={{ marginBottom: 20 }}>Car Filters</h3>
      <div className="select-container">
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Select Brand</option>
          {[...new Set(cars.map((car) => car.brand))].map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Select Model</option>
          {[...new Set(cars.map((car) => car.model))].map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {[...new Set(cars.map((car) => car.year))].map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Select Color</option>
          {[...new Set(cars.map((car) => car.color))].map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="date-picker-container">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date || undefined)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date || undefined)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
        />
      </div>
      <div ref={chartRef} style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
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

export default CarFilterComponent;
