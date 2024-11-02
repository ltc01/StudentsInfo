import React, { useContext } from "react";
import { StudentCard } from "./StudentCard";
import { MainContext } from "../context/StudentContext";

export const StudentsList = () => {
  const { ans, studentData } = useContext(MainContext);

  return (
    <>
      {/* main cards components */}
      <div className="mt-9 mb-9 flex flex-wrap gap-10 justify-center px-10">
        {
        // ans.length === 0 ? 
        // 'no data'
        // (
        //   studentData.students.map((data, index) => (
        //     <StudentCard
        //       key={index}
        //       name={data.name}
        //       profileImage={data.profileImage}
        //       major={data.major}
        //       email={data.email}
        //       actions={data.actions}
        //     />
        //   ))
        // ) 
        // : 
        studentData[0] === "no data" ? (
          // 
          <p>No data found</p>
        // 
        ) 
        : (
          studentData.students.map((data, index) => (
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
