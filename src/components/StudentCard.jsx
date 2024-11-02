import React from "react";
import { IoMail } from "react-icons/io5";

export const StudentCard = ({ name, profileImage, major, email, actions }) => {
  return (
    <>
      {/* student detail card */}
      <div className="border bg-zinc-100 border-black p-4 w-72 rounded-2xl ">
        <div className="flex justify-center items-start gap-4 pb-6">
          {/* student profile */}
          <div className="rounded-full w-12 h-12 overflow-hidden">
            <img
              src={profileImage}
              alt={`${name}_profile`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Student Information */}
          <div className="flex flex-col gap-1">
            <div className="">
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm text-slate-700">{major}</p>
            </div>

            <div className="text-sm text-slate-700">
              <p className="text-nowrap flex items-center gap-1 justify-center">
                <IoMail className="inline" />
                <span className="text-wrap"> {email}</span>
              </p>
            </div>
          </div>
        </div>
        {/* call to action buttons */}
        <div className="flex gap-3 text-sm w-full justify-center">
          <button className="border border-black/60 hover:bg-slate-200 px-3 rounded-lg bg-white text-slate-700 py-1">
            {actions[1].label}
          </button>
          <button className="border px-3 hover:bg-purple-400 rounded-lg text-white bg-black py-1">
            {actions[0].label}
          </button>
        </div>
      </div>
    </>
  );
};
