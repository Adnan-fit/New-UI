import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 text-white p-6">
      <div className="w-[50%] flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">ADNAN BIN NIZAM</span>
      </div>
      <div className="w-96 flex flex-col">
        <div className="text-sm flex items-center justify-between">
          <a href="#responsive-header" className="hover:text-orange-500">
            HOME
          </a>
          <a href="#responsive-header" className="hover:text-white">
            ABOUT
          </a>
          <a href="#responsive-header" className="hover:text-white">
            WORK
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
