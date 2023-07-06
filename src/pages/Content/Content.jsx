import DanhSachMonAn from "../../components/DanhSachMonAn/DanhSachMonAn";
import TopMonAn from "../../components/TopMonAn/TopMonAn";

function Content({
  danhSachMonAn,
  setDanhSachMonAn,
  thongTinMonAn,
  setThongTinMonAn,
  index,
  setIndex,
}) {
  return (
    <div className="w-screen px-[10vw] h-[86.5vh] flex justify-between items-center">
      <DanhSachMonAn
        danhSachMonAn={danhSachMonAn}
        setDanhSachMonAn={setDanhSachMonAn}
        thongTinMonAn={thongTinMonAn}
        setThongTinMonAn={setThongTinMonAn}
        index={index}
        setIndex={setIndex}
      />
      <TopMonAn
        danhSachMonAn={danhSachMonAn}
        setDanhSachMonAn={setDanhSachMonAn}
      />
    </div>
  );
}

export default Content;
