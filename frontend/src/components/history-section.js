import "../index.css"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import HistoryDetails from './history-details';

export default function HistorySection(props) {
    const [history, setHistory] = useState([]);
    const { shouldFetchHistory, setShouldFetchHistory } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    async function fetchHistory() {
        try {
          const response = await fetch(`${backendUrl}/history`);
          if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
          }
          const data = await response.json();
          setHistory(data);
        } catch (error) {
          console.error(error);
        }
    }

    async function deleteHistoryItem(id) {
        try {
          const response = await fetch(`${backendUrl}/history/${id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
          }
          setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
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
            <div className="p-3 flex-grow max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrolling-touch">
            {history.map((item, index) => {
                const inputText = Array.isArray(item.text)
                    ? item.text.join(' ')
                    : item.text;
                return (
                    <div
                        key={index}
                        className="relative p-7 bg-history-sect-text-color hover:bg-calc-btn-color text-white rounded mb-2 font-sans font-semibold "
                        onClick={() => { 
                            setSelectedHistoryItem(item);
                            setIsModalOpen(true);
                        }}
                    >   
                        Input : {inputText}
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={(event) => {
                                event.stopPropagation();
                                deleteHistoryItem(item._id);
                                props.triggerFetchHistory();
                            }}
                        />
                    </div>
                );
            })}
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <HistoryDetails selectedHistoryItem={selectedHistoryItem} />
            </Modal>
            
        </div>
    )
}