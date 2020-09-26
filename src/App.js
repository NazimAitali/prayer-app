import React, { useState, useEffect } from "react";
import Research from "./components/Search";
import Prayer from "./components/Prayer";
import "antd/dist/antd.css";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [date, setDate] = useState("");
  const [zip, setZip] = useState("16000");
  const [country, setCountry] = useState("DZ");
  const updateDate = (text) => {
    setDate(text);
  };
  const updateZip = (text) => {
    setZip(text);
  };
  const updateCountry = (text) => {
    setCountry(text);
  };

  const fetchData = async () => {
    setErr("");
    setLoading(true);
    try {
      const endPoint = "http://www.islamicfinder.us/index.php/api/prayer_times";
      const response = await axios.get(
        `${endPoint}?country=${country}&zipcode=${zip}&time_format=0&date=${date}`
      );
      setLoading(false);
      setData(response.data);
     
    } catch (err) {
      setErr("error");
      setLoading(false);
      setData(null);
     
    }
  };
  {
  useEffect(() => {
    fetchData();
  }, []);
  }
  return (
    <div className="App">
      <Research
        updateC={updateCountry}
        updateZ={updateZip}
        updateD={updateDate}
        fetch={fetchData}
      />
      <Prayer err={err} data={data} loading={loading} />
    </div>
  );
}
export default App;
