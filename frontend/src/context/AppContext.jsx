import React, { useContext, useState } from "react";
import Toast from "../components/Toast/Toast.jsx";
import { useQuery } from "react-query";
// import { loadStripe, Stripe } from "@stripe/stripe-js";
import { validateTokenUser } from "../API/API_users.js";

// const STRIPE_PUBLIC_KEY = (import.meta.env.VITE_STRIPE_PUBLIC_KEY) || "";

const AppContext = React.createContext(undefined);

// const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  const { isError } = useQuery("validateToken", validateTokenUser, {
    retry: false,
  });

  //   const { isError: isAdmin } = useQuery(
  //     "validateTokenAdmin",
  //     validateTokenAdmin,
  //     {
  //       retry: false,
  //     }
  //   );

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
        // isAdmin: !isAdmin,
        // stripePromise,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
