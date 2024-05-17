"use client";

import { SetStateAction, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Table() {
  const [subset, setSubset] = useState("default");
  const [split, setSplit] = useState("train");
  const [showSubsetOptions, setShowSubsetOptions] = useState(false);
  const [showSplitOptions, setShowSplitOptions] = useState(false);

  const data = [
    {
      text: "How AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first…",
      id: "urn:uuid:d66bc6fe-8477-4adf-b430-...",
      dump: "CC-MAIN",
      url: "http://%20jwashington@ap.org/Content/Press-Release/2012/How-AP-reported-in-all-formats-from-…"
    },
    {
      text: "Did you know you have two little yellow, nine-volt-battery-sized adrenal glands in your body, just…",
      id: "urn:uuid:803e14c3-dc2e-43d6-b75d-...",
      dump: "CC-MAIN",
      url: "http://1000awesomethings.com/2012/09/24/934-adrenaline/"
    },
    {
      text: "Car Wash For Clara! Now is your chance to help! 2 year old Clara Woodward has Cancer! Clara can’t sa…",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-...",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    },
    {
      text: "Car Wash For Clara! Now is your chance to help! 2 year old Clara Woodward has Cancer! Clara can’t sa…",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-...",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    },
    {
      text: "Car Wash For Clara! Now is your chance to help! 2 year old Clara Woodward has Cancer! Clara can’t sa…",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-...",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    },
    {
      text: "Car Wash For Clara! Now is your chance to help! 2 year old Clara Woodward has Cancer! Clara can’t sa…",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-...",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    },
    {
      text: "Car Wash For Clara! Now is your chance to help! 2 year old Clara Woodward has Cancer! Clara can’t sa…",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-...",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    }
  ];

  const handleSubsetSelect = (value: SetStateAction<string>) => {
    setSubset(value);
    setShowSubsetOptions(false);
  };

  const handleSplitSelect = (value: SetStateAction<string>) => {
    setSplit(value);
    setShowSplitOptions(false);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th colSpan={4} className="py-2 px-4 border-b border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="relative w-full">
                    <button
                      className="border-gray-300 border rounded p-2 flex items-center justify-between w-full"
                      onClick={() => setShowSubsetOptions(!showSubsetOptions)}
                    >
                      <span className="text-slate-400">Subset: {subset}</span>
                      <span className="ml-2 font-semibold">• 22.3B rows</span>
                      <RiArrowDownSLine className="ml-2" />
                    </button>
                    {showSubsetOptions && (
                      <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10">
                        {["default"].map((option, index) => (
                          <div
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSubsetSelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative w-full ml-4">
                    <button
                      className="border-gray-300 border rounded p-2 flex items-center justify-between w-full"
                      onClick={() => setShowSplitOptions(!showSplitOptions)}
                    >
                      <span className="text-slate-400">Split: {split}</span>
                      <span className="ml-2 font-semibold">• 22.3B rows</span>
                      <RiArrowDownSLine className="ml-2" />
                    </button>
                    {showSplitOptions && (
                      <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10">
                        <div
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSplitSelect("train")}
                        >
                          train
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">text</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">id</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">dump</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">url</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-2 px-4 border-b border-gray-200">{row.text}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.dump}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a href={row.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {row.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-2 px-4 bg-white border-t border-gray-200">
          <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded">Previous</button>
          <span>Page 1 of 3</span>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
