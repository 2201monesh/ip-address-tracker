import { useState } from "react";
import InfoBox from "./InfoBox";
import UserInput from "./UserInput";

function App() {

  const [data, setData] = useState([]);

  return (
    <div className="main-section">
      <h2 className="main-heading">IP Address Tracker</h2>
      <UserInput />
      <InfoBox />
    </div>
  );
}

export default App;
