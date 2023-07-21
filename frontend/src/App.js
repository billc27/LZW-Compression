import React, { useState } from "react";
import HistorySection from './components/history-section';
import CalcSection from './components/calculate-section';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="flex">
        <HistorySection history={history} />
        <CalcSection history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
