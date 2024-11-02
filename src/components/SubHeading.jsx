import React from "react";

export const SubHeading = () => {
  return (
    <>
      {/* main headings */}
      <div className="flex flex-col gap-2 sm:flex-row  justify-between md:px-10">
        <h1 className="font-bold md:text-2xl">Students Information</h1>

        <div className="flex gap-2">
          {["All", "Active", "Inactive"].map((item, index) => (
            <button
              className={`hover:bg-purple-400 ${
                item === "All"
                  ? "bg-purple-400 text-white border-none"
                  : "bg-transparent text-black"
              }  bg-white text-black text-xs hover:text-white font-medium px-2 h-fit py-1 rounded-lg `}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
