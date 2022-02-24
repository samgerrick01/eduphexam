import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="rounded-lg m-1 mx-auto w-1/2 flex justify-center items-center text-5xl text-white mobile:text-xl mobile:w-3/4 tablet:text-3xl">
        Edukasyon PH
      </label>
      <label className="text-white mb-5 mobile:text-xs tablet:text-sm">
        A simple Grade-Book App
      </label>
    </div>
  );
};

export default Header;
