// Next, React, Tw
import React, { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";

// Others
import { login, logout } from "../stores/auth";
import {
  localStorageAvailable,
  isValidToken,
  setSession,
  getUserDetails,
} from "../utils/jwt";

// Interface
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Standard
  const storageAvailable = localStorageAvailable();
  const dispatch = useDispatch();

  // Others

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = storageAvailable
          ? localStorage.getItem("accessToken")
          : null;

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const userDetails = await getUserDetails(accessToken);
          if (userDetails?.data) {
            dispatch(login(userDetails?.data));
            return;
          }
        }
      } catch {}
      dispatch(logout());
    };
    initialize();
  }, [dispatch, storageAvailable]);
  return children;
};

export default AuthProvider;
