import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">plynt</div>
          <div>pricing</div>
          <div>
            <button className="mr-4 px-4 py-2 rounded-full border border-zinc-300 font-semibold text-sm">
              Login
            </button>
            <button className="px-4 py-2 bg-black text-white  rounded-full border border-black font-semibold text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
