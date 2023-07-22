import "../index.css"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function HistorySection(props) {
    const [history, setHistory] = useState([]);
    const { shouldFetchHistory, setShouldFetchHistory } = props;

    async function fetchHistory() {
        try {
          const response = await fetch("http://localhost:3001/history");
          if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
          }
          const data = await response.json();
          setHistory(data);
        } catch (error) {
          console.error(error);
        }
    }    

    useEffect(() => {
        fetchHistory();
    }, []);

    useEffect(() => {
        if (shouldFetchHistory) {
          fetchHistory();
          setShouldFetchHistory(false);
        }
      }, [shouldFetchHistory, setShouldFetchHistory]);

    

    console.log(history);

    return (
        <div className="flex flex-col h-screen w-1/5 bg-history-sect-color p-3">
            <div className="p-3 flex-grow-0">
                <p
                className="w-full bg-history-new-calc-color text-center text-white font-bold py-2 px-4 rounded border border-white font-sans"
                >
                Calculation History
                </p>
            </div>
            <div className="p-3 flex-grow max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrolling-touch">
                {history.map((item, index) => (
                    <div
                        key={index}
                        className="relative p-7 bg-history-sect-text-color hover:bg-calc-btn-color text-white rounded mb-2 font-sans font-semibold "
                        onClick={() => props.setSelectedHistoryItem(item)}
                    >
                        Input : {item.text}
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-red-500"
                        />
                    </div>
                    
                ))}
            </div>
            
        </div>
    )
}