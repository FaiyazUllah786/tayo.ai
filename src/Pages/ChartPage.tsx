import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Map from "../components/Charts/Map";
import Graph from "../components/Charts/Graph";
const queryClient = new QueryClient();

const ChartPage = () => {
  const [showMap, setShowMap] = useState(true);
  const [showGraph, setShowGraph] = useState(false);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {showMap && <Map />}
        {showGraph && <Graph />}
      </QueryClientProvider>
      <div className="flex justify-center items-center gap-10">
        {showMap && (
          <div
            className="m-2 p-2 border-black bg-white font-semibold font-serif  border-2 rounded-lg cursor-pointer"
            onClick={() => {
              setShowMap(showMap ? false : true);
              setShowGraph(showMap ? true : false);
              console.log(showGraph, showMap);
            }}
          >
            Tap to see Graph
          </div>
        )}
        {showGraph && (
          <div
            className="m-2 p-2 border-black bg-white font-semibold font-serif  border-2 rounded-lg cursor-pointer"
            onClick={() => {
              setShowGraph(showGraph ? false : true);
              setShowMap(showGraph ? true : false);
              console.log(showGraph, showMap);
            }}
          >
            Tap to see Map
          </div>
        )}
      </div>
    </>
  );
};

export default ChartPage;
