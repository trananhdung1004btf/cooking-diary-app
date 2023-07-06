import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [attribute, setAttribute] = useState([
    "font-bold text-[#23497c] bg-[#e2e3e5] h-[5vh] w-[5vw] rounded-t-sm",
    "text-white h-[5vh] w-[5vw] rounded-t-sm duration-150 hover:bg-zinc-600",
  ]);

  const handleOnClick = () => {
    setAttribute([
      "font-bold text-[#23497c] bg-[#e2e3e5] h-[5vh] w-[5vw] rounded-t-sm",
      "text-white h-[5vh] w-[5vw] rounded-t-sm duration-150 hover:bg-zinc-600",
    ]);
  };

  const _handleOnClick_ = () => {
    setAttribute([
      "text-white h-[5vh] w-[5vw] rounded-t-sm duration-150 hover:bg-zinc-600",
      "font-bold text-[#23497c] bg-[#e2e3e5] h-[5vh] w-[5vw] rounded-t-sm",
    ]);
  };

  return (
    <div className="px-[10vw] h-[13.5vh] w-screen bg-[#343a40]">
      {/* big logo */}
      <div className="h-[5vh] w-[5vw]">
        <button onClick={handleOnClick} className="py-[0.25vh]" to="/">
          <Link to="/">
            <img
              className="h-[4.5vh] rounded-full"
              src={
                "https://play-lh.googleusercontent.com/kcJtjYTX6mKlrBrmGPnhuFt7PXPhahM-qGUXoplTEY2meBVywRSzjJDfUfuMqM5cjxA"
              }
              alt="Cooking Diary App"
            />
          </Link>
        </button>
      </div>

      {/* navbar */}
      <div className="flex justify-between items-center">
        <div className="">
          <button
            onClick={handleOnClick}
            type="button"
            className={attribute[0]}
          >
            <Link to="/">Food List</Link>
          </button>
          <button
            onClick={_handleOnClick_}
            type="button"
            className={attribute[1]}
          >
            <Link to="/aboutUs">About Us</Link>
          </button>
        </div>

        {/* search bar */}
        <div className="flex justify-center items-center">
          <label
            className="text-[#343a40] absolute ml-[-5.75vw]"
            htmlFor="searchBar"
          >
            <HiOutlineSearch className="" size={15} />
          </label>
          <input
            id="searchBar"
            name="searchBar"
            className="pl-[1.5vw] pr-[0.5vw] mr-[-7.5vw] h-[3.5vh] w-[15vw] outline-none bg-[#e2e3e5] rounded-sm text-[#343a40]"
            type="text"
            placeholder="Tìm kiếm món ăn..."
          />
        </div>
      </div>

      <div className="absolute left-0 h-[3.5vh] w-screen bg-[#e2e3e5]">
        <button
          className="ml-[10vw] text-[0.9rem] text-[#23497C] hover:underline hover:text-[#f60] duration-150"
          type="button"
        >
          <Link to="/themMonAn">Thêm món ăn</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
