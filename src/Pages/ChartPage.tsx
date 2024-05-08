import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Map from "../components/Charts/Map";
import Graph from "../components/Charts/Graph";
import DashBoard from "../components/Charts/DashBoard";
const queryClient = new QueryClient();

const ChartPage = () => {
  const [showMap, setShowMap] = useState(true);
  const [showGraph, setShowGraph] = useState(false);
  const [showDash, setShowDash] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center text-center mt-10 relative">
        <div className="w-full flex flex-col items-center ">
          <div className=" p-2 rounded-md shadow-md mb-2 ">
            <button
              className={`text-xl text-white bg-slate-900 md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-glass border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ${
                showMap
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white bg-glass border border-white shadow-md shadow-slate-600"
                  : "text-gray-800 hover:bg-pink-300"
              }`}
              onClick={() => {
                setShowMap(true);
                setShowGraph(false);
                setShowDash(false);
              }}
            >
              Map
            </button>
            <button
              className={`text-xl text-white bg-slate-900 md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-glass border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ${
                showGraph
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white bg-glass border border-white shadow-md shadow-slate-600"
                  : "text-gray-800 hover:bg-pink-300"
              }`}
              onClick={() => {
                setShowMap(false);
                setShowGraph(true);
                setShowDash(false);
              }}
            >
              Graph
            </button>
            <button
              className={`text-xl text-white bg-slate-900 md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-glass border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ${
                showDash
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white bg-glass border border-white shadow-md shadow-slate-600"
                  : "text-gray-800 hover:bg-pink-300"
              }`}
              onClick={() => {
                setShowMap(false);
                setShowGraph(false);
                setShowDash(true);
              }}
            >
              Dashboard
            </button>
          </div>
        </div>
        <QueryClientProvider client={queryClient}>
          {showMap && <Map />}
          {showGraph && <Graph />}
          {showDash && <DashBoard />}
        </QueryClientProvider>
      </div>
    </>
  );
};

export default ChartPage;
