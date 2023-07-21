import "../index.css"
import React, { useState } from 'react'

export default function HistorySection(props) {

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
                {props.history.map((item, index) => (
                    <div key={index} className="p-7 bg-history-sect-text-color text-white rounded mb-2 font-sans" onClick={() => console.log(item)}>
                        {item.inputText}
                    </div>
                ))}
            </div>
        </div>
    )
}