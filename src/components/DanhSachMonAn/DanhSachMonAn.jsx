import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

function DanhSachMonAn({
  danhSachMonAn,
  setDanhSachMonAn,
  thongTinMonAn,
  setThongTinMonAn,
  index,
  setIndex,
}) {
  const handleOnClick = (e, i) => {
    setThongTinMonAn(e);
    setIndex(i);
  };
  return (
    <div className="rounded-md h-[83.5vh] w-[60vw] bg-[#ebeced]">
      <div className="h-[5.5vh] w-[60vw] text-[1.25rem] bg-[#5c7099] rounded-t-md flex justify-start items-center text-white pl-[1vw]">
        Danh sách món ăn
      </div>

      {danhSachMonAn.map((monAn, index) => (
        <div className="w-[60vw] h-[7.5vh] border-b-2 border-gray-500 flex justify-between items-center px-[1vw]">
          <div className="flex justify-center items-center">
            <img
              className="h-[5vh] w-[5vw]"
              src={monAn.thongTinMonAn.anhMonAn}
              alt="Selected"
            />
            <button
              onClick={() => {
                handleOnClick(monAn, index);
              }}
              type="button"
              className="text-[1.5rem] py-[1vh] px-[1vw] text-[#5C7099] hover:underline hover:text-[#f60] duration-150"
            >
              <Link to="/xemMonAn">{monAn.thongTinMonAn.tenMonAn}</Link>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-7 w-7 ${
                    monAn.thongTinMonAn.soSao >= index + 1
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="ml-[1vw] flex flex-col justify-center items-center justify-self-end">
              <div className="text-gray-500">Số lần nấu lại</div>
              <div className="text-[1.25rem] font-semibold">
                {monAn.cacLanNauAn.length}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DanhSachMonAn;
