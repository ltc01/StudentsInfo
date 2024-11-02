import { createContext, useState } from "react";
import data from "./../Data.json";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [ans, setAns] = useState([]);
  const [studentData, setStudentData] = useState(data);
  const [searchItem, setSearchItem] = useState("");

  const value = {
    studentData,
    setStudentData,
    searchItem,
    setSearchItem,
    ans,
    setAns,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
