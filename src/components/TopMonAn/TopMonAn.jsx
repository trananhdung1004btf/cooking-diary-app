import { StarIcon } from "@heroicons/react/solid";

function TopMonAn({ danhSachMonAn, setDanhSachMonAn }) {
  let soSao = 5;
  let newList = [];

  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < danhSachMonAn.length; j++) {
      if (danhSachMonAn[j].thongTinMonAn.soSao === soSao) {
        newList.push(danhSachMonAn[j]);
      }
    }
    soSao--;
  }

  return (
    <div className="h-[83.5vh] min-w-[25vw] ml-[2.5vw] rounded-lg bg-[#ebeced]">
      <div className="text-[1.25rem] py-[1vh] px-[1vw] text-[#5C7099]">
        Top món ăn
      </div>

      {newList.map((item) => (
        <div className="mx-[1vw] flex justify-start items-center">
          <div className="h-[3vh] px-[0.25rem] bg-[#dce7f5] rounded-md ring-1 ring-[#869bbf] flex justify-start items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${
                  item.thongTinMonAn.soSao >= index + 1
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-[1.25rem] py-[1vh] px-[1vw] text-[#5C7099]">
            {item.thongTinMonAn.tenMonAn}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopMonAn;
