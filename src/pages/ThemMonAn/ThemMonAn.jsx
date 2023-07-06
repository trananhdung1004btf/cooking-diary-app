import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

function ThemMonAn({ danhSachMonAn, setDanhSachMonAn, index, setIndex }) {
  let _newList_ = JSON.parse(JSON.stringify(danhSachMonAn));
  let _soSao_;
  let _anh_;
  let _tenMonAn_;
  let _cheBien_;

  if (index === -1) {
    _soSao_ = 0;
    _anh_ = null;
    _tenMonAn_ = "";
    _cheBien_ = "";
  } else {
    _soSao_ = _newList_[index].thongTinMonAn.soSao;
    _anh_ = _newList_[index].thongTinMonAn.anhMonAn;
    _tenMonAn_ = _newList_[index].thongTinMonAn.tenMonAn;
    _cheBien_ = _newList_[index].thongTinMonAn.cacBuocCheBien;
  }

  const [rating, setRating] = useState(_soSao_);

  const handleStarClick = (starCount) => {
    setRating(starCount);
  };

  const [selectedImage, setSelectedImage] = useState(_anh_);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const [tenMonAn, setTenMonAn] = useState(_tenMonAn_);
  const [cacBuocCheBien, setCacBuocCheBien] = useState(_cheBien_);

  const handleOnChange = (e) => {
    setTenMonAn(e.target.value);
  };

  const _handleOnChange_ = (e) => {
    setCacBuocCheBien(e.target.value);
  };

  const confirmOnClick = () => {
    // const newList = JSON.parse(JSON.stringify(danhSachMonAn))
    const newElement = {
      thongTinMonAn: {
        tenMonAn: tenMonAn,
        soSao: rating,
        cacBuocCheBien: cacBuocCheBien,
        anhMonAn: selectedImage,
      },
      cacLanNauAn: [],
    };
    const newList = JSON.parse(JSON.stringify(danhSachMonAn));
    if (index === -1) {
      newList.push(newElement);
    } else {
      newList[index] = newElement;
      setIndex(-1);
    }
    localStorage.setItem("danhSachMonAn", JSON.stringify(newList));
    setDanhSachMonAn(newList);
    setRating(0);
    setSelectedImage(null);
    setTenMonAn("");
    setCacBuocCheBien("");
  };

  return (
    <div className="h-[86.5vh] w-screen">
      <div className="absolute m-auto top-0 left-0 right-0 bottom-0 rounded-md h-[60vh] w-[80vw] bg-[#ebeced]">
        <div className="px-[1vw] text-white text-[1.25rem] py-[1vh] rounded-t-md h-[5.5vh] w-[80vw] bg-[#5c7099]">
          Thêm món ăn
        </div>

        <div className="w-[80vw] h-[45vh] flex justify-center items-center">
          <div className="h-[45vh] w-[20vw] bg-[#e2e3e5] border-2 border-gray-300 flex flex-col items-end">
            <label
              className="text-[1.25rem] mr-[1vw] mt-[1.5vh]"
              htmlFor="tenMonAn"
            >
              Tên món ăn:
            </label>

            <label className="text-[1.25rem] mr-[1vw] mt-[1.75vh]">
              Đánh giá số sao:
            </label>

            <label
              htmlFor="cacBuocCheBien"
              className="text-[1.25rem] mr-[1vw] mt-[1.75vh]"
            >
              Các bước chế biến:
            </label>

            <label
              htmlFor="anhMonAn"
              className="text-[1.25rem] mr-[1vw] mt-[23vh]"
            >
              Ảnh món ăn:
            </label>
          </div>
          <div className="h-[45vh] w-[60vw] bg-[#ebeced] border-l-0 border-gray-300 border-2 flex flex-col">
            <input
              value={tenMonAn}
              onChange={handleOnChange}
              id="tenMonAn"
              name="tenMonAn"
              type="text"
              className="h-[5vh] w-[50vw] border-2 border-gray-300 ml-[1vw] mt-[1vh] rounded-md bg-[#e5eaf0] outline-none focus:bg-[#e8ebee] focus:border-[#909fb9] px-[1vw]"
            />

            <div className="flex items-center ml-[1vw] mt-[1.5vh]">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-7 w-7 cursor-pointer ${
                    rating >= index + 1 ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleStarClick(index + 1)}
                />
              ))}
            </div>

            <textarea
              value={cacBuocCheBien}
              onChange={_handleOnChange_}
              id="cacBuocCheBien"
              name="cacBuocCheBien"
              type="text"
              className="h-[25vh] w-[50vw] border-2 border-gray-300 ml-[1vw] mt-[2vh] rounded-md bg-[#e5eaf0] outline-none focus:bg-[#e8ebee] focus:border-[#909fb9] px-[1vw] py-[1vh]"
            />

            <div className="h-[15vh] flex flex-col justify-start items-start">
              <input
                id="anhMonAn"
                name="anhMonAn"
                className="ml-[1vw] mt-[2vh]"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <div>
                  <img
                    className="ml-[1vw] mt-[1vh] h-[5vh] w-auto"
                    src={selectedImage}
                    alt="Selected"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="h-[9.5vh] w-[80vw] rounded-b-md bg-[#dde7f4] flex justify-start items-center">
          <button
            type="button"
            onClick={confirmOnClick}
            className="ml-[20vw] h-[5vh] w-[7.5vw] text-white font-bold rounded-md bg-[#5c7099] hover:bg-[#23497c] duration-150"
          >
            <Link to="/">Xác nhận</Link>
          </button>

          <button
            type="button"
            className="ml-[0.5vw] h-[5vh] w-[7.5vw] text-white font-bold rounded-md bg-red-500 hover:bg-red-700 duration-150"
          >
            <Link to="/">Huỷ</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemMonAn;
