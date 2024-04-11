import React from "react";

function Loginpage() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center h-screen -mt-16">
        {" "}
        <div>
          <h1 className="text-gray-400 font-bold">Login to get started</h1>
        </div>
        <div>
          <button className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg">
            Sign in with GitHub
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
