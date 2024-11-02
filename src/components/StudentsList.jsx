import React, { useContext } from "react";
import { StudentCard } from "./StudentCard";
import { MainContext } from "../context/StudentContext";

export const StudentsList = () => {
  const { ans, studentData } = useContext(MainContext);
console.log(studentData)
  return (
    <>
      {/* main cards components */}
      <div className="mt-9 mb-9 flex flex-wrap gap-10 justify-center px-10">
        {  
        studentData.length === 0 ? (
          <p>No data found</p>
        ) 
        : (
          studentData.map((data, index) => (
            <StudentCard
              key={index}
              name={data.name}
              profileImage={data.profileImage}
              major={data.major}
              email={data.email}
              actions={data.actions}
            />
          ))
        )}
      </div>
    </>
  );
};
