import { createContext } from "react";
import studentData from './../Data.json';

const MainContext = createContext();

export const ContextProvider = ({children}) => {
    const [name, profileImage, major, year, email, actions] = [...studentData];
    co

    return <MainContext.Provider value={data} >{children}</MainContext.Provider>
}
