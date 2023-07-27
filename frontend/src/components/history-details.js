import React from 'react';

export default function HistoryDetails(props) {
    const { selectedHistoryItem } = props;
    const inputText = Array.isArray(selectedHistoryItem.text)
        ? selectedHistoryItem.text.join(' ')
        : selectedHistoryItem.text;

    return (
        <div className="bg-web-color h-full font-sans font-semibold p-5 text-white">
            <h1 className="text-center text-2xl">History Details</h1>
            <div className="text-lg">
                <p>Input: {inputText}</p>
                <p>Mode: {selectedHistoryItem.mode}</p>
                <p>Algorithm: {selectedHistoryItem.algorithm}</p>
                <p>Additional Info: {selectedHistoryItem.additional}</p>
                <p>Result: {selectedHistoryItem.result.replace(/,/g, " ")}</p>
            </div>
            
        </div>
    );
}