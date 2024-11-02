import React, { useContext } from "react";
import { MainContext } from "../context/StudentContext";
import { FaSearch } from "react-icons/fa";
import data from "./../Data.json";

export const Header = () => {
  const { setSearchItem, studentData, setStudentData, searchItem } =
    useContext(MainContext);

  // function for search items
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);

    if(!value) {
      setStudentData(data.students);
    } else {
      let filteredResults = studentData.filter((prev) =>
      prev.name.toLowerCase().includes(value.toLowerCase())
    );
      setStudentData(filteredResults);
    }
  }
  

  return (
    <>
      {/* searchbar and admin btn */}
      <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between w-full pb-6">
        <div className=" w-fit mb-5 md:mb-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" flex bg-white items-center pl-3 shadow relative rounded-xl border border-black/40 overflow-hidden"
          >
            <FaSearch className=" text-slate-400" />
            <input
              className="p-2 px-3 outline-none"
              type="text"
              name="findTransaction"
              id="findTransaction"
              size={25}
              placeholder="Search..."
              value={searchItem}
              onChange={handleSearch}
              required
            />
          </form>
        </div>

        {/* admin profile icon */}
        <div className="flex gap-2 items-center md:mr-16">
          <div className="rounded-full w-10 h-10 border overflow-hidden border-black">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.2115178390.1726231496&semt=ais_hybrid"
              alt={`profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <p>Admin</p>
        </div>
      </div>
    </>
  );
};
