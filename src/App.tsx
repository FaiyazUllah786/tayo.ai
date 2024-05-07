import AllRoutes from "./Routes/AllRoutes";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex  bg-img">
      <SideBar />
      <div className=" my-5 mx-auto transition-all duration-300 flex-1 ">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
