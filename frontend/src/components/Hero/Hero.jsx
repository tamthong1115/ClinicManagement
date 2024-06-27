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
          <Link to="#">Trang chủ</Link>
        </button>
        <button className="col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faBook} />
          <Link to="#">Các dịch vụ</Link>
        </button>
        <button className=" col max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faPercent} />
          <Link to="#">Ưu đãi</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faCircleQuestion} />
          <Link to="#">Hỏi/Đáp</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faAddressBook} />
          <Link to="#">Liên hệ</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faCalendar} />
          <Link to="#">Đặt lịch hẹn</Link>
        </button>
        <button className="max-w-50 mr-6 flex h-9 items-center rounded-full p-3 text-white hover:border-blue-500 hover:bg-blue-800 md:mr-0 md:max-w-none">
          <FontAwesomeIcon className="mr-4" icon={faSearch} />
          <Link to="/">Tìm kiếm</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
