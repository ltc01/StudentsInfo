import { createContext, useState } from "react";
import data from "./../Data.json";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(data.students);
  const [searchItem, setSearchItem] = useState("");

  const value = {
    studentData,
    setStudentData,
    searchItem,
    setSearchItem,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
