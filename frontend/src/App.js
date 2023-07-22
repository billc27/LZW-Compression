import React, { useState } from "react";
import HistorySection from './components/history-section';
import CalcSection from './components/calculate-section';

function App() {
    const [history, setHistory] = useState([]);
    const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
    const [shouldFetchHistory, setShouldFetchHistory] = useState(false);

    const triggerFetchHistory = () => {
    setShouldFetchHistory(true);
    };

    return (
        <div className="flex">         
            <HistorySection history={history} setSelectedHistoryItem={setSelectedHistoryItem} shouldFetchHistory={shouldFetchHistory} setShouldFetchHistory={setShouldFetchHistory} triggerFetchHistory={triggerFetchHistory}/>
            <CalcSection history={history} setHistory={setHistory} selectedHistoryItem={selectedHistoryItem}  shouldFetchHistory={shouldFetchHistory} setShouldFetchHistory={setShouldFetchHistory} triggerFetchHistory={triggerFetchHistory}/>
        </div>
    );
}

export default App;
