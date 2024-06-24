import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faPercent,
  faCircleQuestion,
  faAddressBook,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="gird wide">
      <div className="row container  mx-auto flex justify-center flex-wrap gap-2  md:flex-nowrap ">
        <button className="col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faHouse} />
          <Link to="https://booking.com">Home</Link>
        </button>
        <button className="col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faBook} />
          <Link to="https://flights-vn.gotogate.com/rf/start">Services</Link>
        </button>
        <button className=" col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faPercent} />
          <Link to="https://www.agoda.com">Promotion</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faCircleQuestion} />
          <Link to="https://www.rentalcars.com">Q/A</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faSearch} />
          <Link to="/">Search</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faAddressBook} />
          <Link to="https://www.hochiminhcityairport.com/transportation/">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
