import React from 'react';
import { IoMail } from "react-icons/io5";

export const StudentCard = () => {
  return (
    <>
    {/* student detail card */}
    <div className="border border-black p-4 w-fit rounded-3xl ">
        <div className="flex justify-center items-start gap-2 pb-6">
            {/* student profile */}
            <div className="rounded-full w-10 h-10 border overflow-hidden border-black">
                <img src={profileImage} alt={`${name}_profile`} className='w-full h-full' />
            </div>
            {/* Student Information */}
            <div className="flex flex-col gap-1">
                <div className="">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="">{major} | <span className="">{year}</span></p>
                </div>

                <div className="">
                    <p><IoMail className='inline' /> {email}</p>

                </div>
            </div>
            
        </div>
        <div className="flex gap-3 w-full justify-center">
            <button className="border border-black px-4 rounded-lg bg-white text-black p-2">{actions[1].label}</button>
            <button className="border px-4 rounded-lg text-white bg-black p-2">{actions[0].label}</button>
        </div>
    </div>
    </>
  )
}
