import React from 'react';

export default function HistoryDetails(props) {
    const { selectedHistoryItem } = props;
    const inputText = Array.isArray(selectedHistoryItem.text)
        ? selectedHistoryItem.text.join(' ')
        : selectedHistoryItem.text;

    return (
        <div>
            <h1>History Details</h1>
            <p>Input: {inputText}</p>
            <p>Mode: {selectedHistoryItem.mode}</p>
            <p>Algorithm: {selectedHistoryItem.algorithm}</p>
            <p>Result: {selectedHistoryItem.result.replace(/,/g, " ")}</p>
        </div>
    );
}