import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { legalIcon } from "../../components/CustomIcon";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Spinner from "../Spinner";

interface CountryData {
  country: string;
  countryInfo: CountryInfo;
  active: number;
  recovered: number;
  deaths: number;
}
interface CountryInfo {
  lat: number;
  long: number;
}

function Map() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoDataMap"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries#").then((res) =>
        res.json()
      ),
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
    <>
      <div className=" flex justify-center items-center flex-col ">
        <MapContainer
          className="h-96 w-2/3 mt-10"
          center={[data[0].countryInfo.lat, data[0].countryInfo.long]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((elem: CountryData) => (
            <Marker
              icon={legalIcon}
              key={elem.country}
              position={[elem.countryInfo.lat, elem.countryInfo.long]}
            >
              <Popup>
                <div>
                  <span className="font-bold">Country: </span>
                  {elem.country}
                </div>
                <div>
                  <span className="font-bold">Acitve Cases: </span>{" "}
                  {elem.active}
                </div>
                <div>
                  <span className="font-bold">Recovered Cases: </span>{" "}
                  {elem.recovered}
                </div>
                <div>
                  <span className="font-bold">Deaths: </span> {elem.deaths}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
