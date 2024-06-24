import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faPercent,
  faCircleQuestion,
  faAddressBook,
  faSearch,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="gird wide">
      <div className="row container  mx-auto flex justify-center flex-wrap gap-2  md:flex-nowrap ">
        <button className="col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faHouse} />
          <Link to="#">Home</Link>
        </button>
        <button className="col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faBook} />
          <Link to="#">Services</Link>
        </button>
        <button className=" col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faPercent} />
          <Link to="#">Promotion</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faCircleQuestion} />
          <Link to="#">Q/A</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faAddressBook} />
          <Link to="#">Contact</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faCalendar} />
          <Link to="#">Booking</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faSearch} />
          <Link to="/">Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
