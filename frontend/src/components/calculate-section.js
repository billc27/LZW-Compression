import "../index.css";
import React, { useState } from "react";

export default function CalcSection() {
  return (
    <div className="w-full bg-web-color p-4">
        <p className="text-center mt-5">
            <span className="bg-title-color text-black px-10 py-4 font-sans rounded-md" style={{ fontSize: "36px" }}>
                LZW Compression Website
            </span>
        </p>

        {/* Box Section */}
        <div className="flex flex-col md:flex-row justify-center mt-20">
            {/* Input Text Section */}
            <div className="flex flex-col items-start w-full pl-10 pr-5">
                <p className="text-left text-white font-semibold font-sans">Your Text</p>
                <textarea
                    className="w-full p-2 bg-input-box-color border border-gray-300 rounded-sm mt-2 h-80 text-white font-sans"
                    placeholder="Enter text here"
                />
            </div>

            {/* Result Box Section */}
            <div className="flex flex-col w-full pr-10 pl-5">
                <p className="text-left text-white font-semibold font-sans">Result</p>
                <div className="w-full p-2 bg-calc-btn-color border border-gray-300 rounded-sm mt-2 h-80 font-sans">
                    Lorem Ipsum
                </div>
            </div>
        </div>

        {/* Choose Algorithm Section */}
        <div className="flex items-center mt-10 pl-10">
                    <label htmlFor="algorithm" className="mr-2 font-sans text-white">
                        Choose Algorithm:
                    </label>
                    <select id="algorithm" className="bg-calc-btn-color rounded-sm pl-2 font-sans">
                        <option value="algorithm1">LZW Algorithm</option>
                        <option value="algorithm2">GokGok Algorithm</option>
                        <option value="algorithm3">ABC Algorithm</option>
                    </select>
                </div>

        {/* Mode Section */}
        <div className="flex flex-row items-center mt-4 w-full pl-10 pr-10 font-sans text-white ">
            <div className="flex flex-col mr-4 flex-grow">
                <label>
                    <input type="radio" name="mode" value="encode" className="mr-2" />
                    Encode
                </label>
                <label>
                    <input type="radio" name="mode" value="decode" className="mr-2" />
                    Decode
                </label>
            </div>

            {/* Calculate Button Section */}
            <button className="bg-calc-btn-color w-40 h-10 rounded-lg font-bold font-sans hover:bg-gray-200 text-black">Calculate</button>
        </div>
    </div>
    );
}
