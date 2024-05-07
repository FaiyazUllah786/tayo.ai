import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Checkbox from "@mui/material/Checkbox";
import Spinner from "../Spinner";

export default function Graph() {
  const [casesShow, setCasesShow] = useState(true);
  const [recoveredShow, setRecoveredShow] = useState(false);
  const [deathsShow, setDeathsShow] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all#").then(
        (res) => res.json()
      ),
  });
  if (isPending)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <>"An error has occurred: " + {error.message}</>;

  if (data) console.log(Object.keys(data.cases), Object.values(data.cases));
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold underline text-lg font-serif text-slate-700 ">
        COVID-19 Cases Fluctuations
      </h1>
      <LineChart
        height={500}
        margin={{ left: 130, right: 130, top: 130 }}
        series={[
          casesShow
            ? {
                data: Object.values(data.cases),
                label: "Cases",
                color: "blue",
              }
            : { data: [] },
          deathsShow
            ? {
                data: Object.values(data.deaths),
                label: "Deaths",
                color: "red",
              }
            : { data: [] },
          recoveredShow
            ? {
                data: Object.values(data.recovered),
                label: "Recovered",
                color: "green",
              }
            : { data: [] },
        ]}
        xAxis={[
          {
            tickLabelStyle: {
              angle: 45,
              textAnchor: "start",
              fontSize: 12,
              fill: "#fdb462",
            },
            scaleType: "point",
            data: Object.keys(data.cases),
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: {
              fill: "#fdb462", // Set Y axis label color to white
            },
          },
        ]}
      />
      <div className="flex gap-6 font-semibold text-sm text-white">
        <div>
          Cases
          <Checkbox
            color="secondary"
            checked={casesShow}
            onChange={() => {
              setCasesShow(casesShow ? false : true);
            }}
          />
        </div>
        <div>
          Deaths
          <Checkbox
            color="secondary"
            checked={deathsShow}
            onChange={() => {
              setDeathsShow(deathsShow ? false : true);
            }}
          />
        </div>
        <div>
          Recovered
          <Checkbox
            color="secondary"
            checked={recoveredShow}
            onChange={() => {
              setRecoveredShow(recoveredShow ? false : true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
