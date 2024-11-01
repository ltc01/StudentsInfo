import React from 'react'
import { StudentCard } from './StudentCard';
import studentData from './../Data.json';
import SearchBar from './SearchBar';


export const StudentsList = () => {
  return (
    <>
    <h1 className="font-bold">Students Information</h1>
    <SearchBar />
<div className=" mt-9 flex flex-wrap gap-10 justify-center px-10 ">
    {studentData.students.map((data, index)=>(
// {name, profileImage, major, year, email, actions}

        <StudentCard
        key={index}
        name={data.name}
        profileImage={data.profileImage}
        major={data.major}
        year={data.year}
        email={data.email}
        actions={data.actions}
        />
    ))}
    </div>
    </>
  )
}
