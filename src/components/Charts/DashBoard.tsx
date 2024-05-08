import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const DashBoard = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoDataAll"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <>"An error has occurred: " + {error.message}</>;

  if (data) console.log(data);
  return (
    <div className="bg-glass border-2 m-auto border-gray-600 font-serif rounded-lg py-2 px-4 p gap-2 flex flex-col  bg-opacity-25 text-start">
      <p className="text-[#1a0a19] text-3xl font-bold underline underline-offset-8 mb-2">
        Global Cases of Covid-19
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Population:{" "}
        <span className="font-bold text-white font-mono">
          {data.population}
        </span>
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Cases:{" "}
        <span className="font-bold text-white font-mono">{data.cases}</span>
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Active:{" "}
        <span className="font-bold text-white  font-mono">{data.active}</span>
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Recovered:{" "}
        <span className="font-bold text-white  font-mono">
          {data.recovered}
        </span>
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Critical:{" "}
        <span className="font-bold text-white  font-mono">{data.critical}</span>
      </p>
      <p className="text-slate-800 text-2xl font-extrabold">
        Deaths:{" "}
        <span className="font-bold text-white  font-mono">{data.deaths}</span>
      </p>
    </div>
  );
};

export default DashBoard;
