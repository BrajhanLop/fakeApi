import React from "react";

const NavBar = () => {
  return (
    <nav className=" w-full h-20 bg-gray-700 py-3 px-5 flex justify-between items-center">
      <div className="logo text-white font-medium">Ecommer</div>
      <div className="">
        <a className="text-white px-3 py-2 hover:bg-gray-800" href="#">
          Inicio
        </a>
        <a className="text-white px-3 py-2 hover:bg-gray-800" href="#">
          Acerca de
        </a>
        <a className="text-white px-3 py-2 hover:bg-gray-800" href="#">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
