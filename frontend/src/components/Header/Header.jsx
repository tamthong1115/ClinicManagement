import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import UserMenu from "../Dropdown/UserMenu.jsx";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div>
      <div className={cx("header")}>
        <img
          style={{
            width: "10%",
            borderRadius: "50%",
            boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
          className={cx("/thumbnail.png")}
          src={"/thumbnail.png"}
          alt="thumbnail"
        />
        <span className={cx("logo")}>
          <Link to="/">Republic Clinic</Link>
        </span>

        <span className={cx("right")}>
          <div className=" flex">
            <button className="  flex  h-8 cursor-pointer items-center rounded-md bg-transparent px-4 py-2 text-white hover:bg-blue-700">
              <FontAwesomeIcon className="text-lg" icon={faBell} />
            </button>
            <Link to="/contact-us">
              <button className="  flex  h-8 cursor-pointer items-center rounded-md bg-transparent px-4 py-2 text-white hover:bg-blue-700">
                <FontAwesomeIcon className="text-lg " icon={faCircleQuestion} />
              </button>
            </Link>
          </div>

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div className="flex">
              <Link
                to="/sign-in"
                className="flex h-8 items-center rounded-sm bg-white px-3 font-medium text-blue-600 hover:bg-gray-100 md:mr-2 md:max-w-none"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className=" flex h-8 items-center rounded-sm bg-white px-3 font-medium text-blue-600 hover:bg-gray-100 md:mr-2 md:max-w-none"
              >
                Register
              </Link>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
