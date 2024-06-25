import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../../context/AppContext.jsx";
import { signOut } from "../../API/API_users.js";
// import MenuUser from "../MenuUser/MenuUser.tsx";
// import classNames from "classnames/bind";
// import styles from "./index.module.scss";
// import { MENU_ITEMS } from "../../config/types.tsx";

// const cx = classNames.bind(styles);

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken"); // from isError AppContext
      await queryClient.invalidateQueries("validateTokenAdmin"); // from isAdmin AppContext
      showToast({ message: "Sign Out!", type: "SUCCESS" });
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <div className="" onClick={handleClick}>
      Sign Out
    </div>
  );
};

export default SignOutButton;
