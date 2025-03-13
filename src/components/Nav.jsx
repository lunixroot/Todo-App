import React, { useState } from "react";

const Nav = () => {
  const [first, setfirst] = useState();
  return (
    <div className=" bg-amber-500 flex justify-between py-2 px-10 align-center ">
      <div>
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div className="flex gap-5">
        <h1>Home</h1>
        <h1>About</h1>
      </div>
    </div>
  );
};

export default Nav;
