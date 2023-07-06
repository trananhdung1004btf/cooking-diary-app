import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { StarIcon } from "@heroicons/react/solid";

function XemMonAn({ thongTinMonAn, setThongTinMonAn, index, setIndex }) {
  const handleOnClick = () => {};

  console.log(thongTinMonAn);

  return (
    <div className="w-[80vw] h-[80vh] m-auto mt-[3vh] top-0 left-0 right-0 bottom-0 rounded-md bg-[#ebeced]">
      <div className="w-[80vw] h-[5.5vh] rounded-t-md bg-[#5c7099] px-[1vw] py-[1vh] text-white text-[1.25rem] flex justify-between items-center">
        <div>{thongTinMonAn.thongTinMonAn.tenMonAn}</div>

        <div className=" flex justify-center items-center gap-1">
          <button
            onClick={handleOnClick}
            className="text-white h-[4.5vh] w-[4.5vh] flex justify-center items-center bg-green-500 rounded-sm hover:bg-green-600 duration-150"
          >
            <Link to="/themMonAn">
              <FiSettings size={25} />
            </Link>
          </button>
          <button className="text-white h-[4.5vh] flex justify-center items-center w-[4.5vh] bg-red-500 rounded-sm hover:bg-red-600 duration-100">
            <Link to="/">
              <AiOutlineClose size={25} />
            </Link>
          </button>
        </div>
      </div>

      <div className="px-[1vw] py-[1vh] flex gap-5">
        <div className="max-h-[200px] max-w-[200px]">
          <img
            className="min-h-[200px] min-w-[200px] rounded-md"
            src={thongTinMonAn.thongTinMonAn.anhMonAn}
            alt=""
          />
        </div>

        <div className="text-[1.25rem]">
          {thongTinMonAn.thongTinMonAn.cacBuocCheBien}
        </div>
      </div>

      <div>
        <div className="flex justify-start ml-[1vw] items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-10 w-10 ${
                thongTinMonAn.thongTinMonAn.soSao >= index + 1
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default XemMonAn;
