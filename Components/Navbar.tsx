const Navbar = () => {
  return (
    <div className="max-w-screen-2xl pt-5">
      <div className="w-6/12 mx-auto flex shadow-lg items-center bg-white py-3 rounded-2xl">
        <div className="w-1/3 ml-6">
          <img src="/logo.png" alt="" className="h-[3.5vw]" />
        </div>
        <div className="flex w-2/3 justify-evenly items-center">
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
            Home
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
            Service
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
            OurWork
          </li>
          <button className="text-[16px] font-normal uppercase px-4 py-2 bg-[#292929] rounded-md text-white">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
