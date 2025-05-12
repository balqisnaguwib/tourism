// Next, React, Tw
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

// Mui
import { CircularProgress } from "@mui/material";

// Interfaces
interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  // Standard and Vars
  const { isLoading } = useSelector((state: any) => state?.loading);

  if (isLoading) {
    return (
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-white">
        <CircularProgress />
      </div>
    );
  }

  return children;
};

export default Loader;
