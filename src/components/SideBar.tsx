import { Link, useLocation } from "react-router-dom";
import { MdContactPage } from "react-icons/md";
import { TbChartSankey } from "react-icons/tb";

const SideBar = () => {
  const location = useLocation();

  return (
    <div>
      <aside
        className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border-gray-800 text-white"
      >
        <nav className="h-full flex flex-col gap-3">
          <Link
            to="/"
            style={{ color: location.pathname === "/" ? "#520030" : "#000" }}
            className="font-serif mt-9 mb-5"
          >
            <div className="flex flex-col justify-center items-center">
              <MdContactPage size={35} />
              Contacts
            </div>
          </Link>
          <Link
            to="/chart"
            style={{
              color: location.pathname === "/chart" ? "#520030" : "#000",
            }}
            className="font-serif mt-9"
          >
            <div className="flex flex-col justify-center items-center">
              <TbChartSankey size={35} />
              Charts
            </div>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
