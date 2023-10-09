import { useState } from "react";
import InfoBox from "./InfoBox";
import UserInput from "./UserInput";
import MapSection from "./MapSection";
import Map from "./Map";

function App() {

  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    const response = await fetch(`http://ip-api.com/json/${e}`);
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  return (
    <div className="main-section">
      <h2 className="main-heading">IP Address Tracker</h2>
      <UserInput onSearch={fetchData} />
      <InfoBox data={data} />
      <Map data={data} />
    </div>
  );
}

export default App;
