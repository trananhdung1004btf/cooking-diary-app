import { useState } from "react";

function AboutUs() {
  const [heading, setHeading] = useState("Terms and rules");
  const [content, setContent] = useState(`Điều khoản và Quy định

  Bảo mật thông tin:
  Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và thông tin trong nhật ký nấu ăn. Chúng tôi sẽ không tiết lộ, chia sẻ hoặc bán thông tin của bạn cho bên thứ ba mà không có sự đồng ý rõ ràng của bạn.

  Trách nhiệm cá nhân:
  Bạn chịu trách nhiệm đảm bảo rằng thông tin và nội dung mà bạn cung cấp trong nhật ký nấu ăn là chính xác và không vi phạm quyền riêng tư, bản quyền hoặc các quy định pháp luật hiện hành.

  Quyền sở hữu nội dung:
  Bạn sở hữu toàn bộ quyền sở hữu trí tuệ đối với nội dung mà bạn chia sẻ trong nhật ký nấu ăn. Tuy nhiên, bạn đồng ý cấp phép cho chúng tôi sử dụng, sao chép, phân phối và hiển thị nội dung đó trong phạm vi hoạt động của ứng dụng.

  Hạn chế trách nhiệm:
  Chúng tôi không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc sử dụng ứng dụng nhật ký nấu ăn hoặc sự không thể truy cập vào nó. Bạn sử dụng ứng dụng này hoàn toàn dựa trên sự chịu rủi ro cá nhân của mình.

  Tuân thủ quy định pháp luật:
  Bạn đồng ý tuân thủ tất cả các quy định pháp luật và quy định hiện hành liên quan đến việc sử dụng ứng dụng nhật ký nấu ăn.

  Thay đổi và cập nhật:
  Chúng tôi có quyền thay đổi và cập nhật Điều khoản và Quy định này theo ý muốn. Việc thay đổi sẽ được thông báo cho bạn thông qua ứng dụng hoặc các phương tiện truyền thông khác. Bằng cách tiếp tục sử dụng ứng dụng, bạn đồng ý tuân thủ các thay đổi này.

`);

  const handleOnClick = () => {
    setHeading("Terms and rules");
    setContent(`Điều khoản và Quy định

    Bảo mật thông tin:
    Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và thông tin trong nhật ký nấu ăn. Chúng tôi sẽ không tiết lộ, chia sẻ hoặc bán thông tin của bạn cho bên thứ ba mà không có sự đồng ý rõ ràng của bạn.
  
    Trách nhiệm cá nhân:
    Bạn chịu trách nhiệm đảm bảo rằng thông tin và nội dung mà bạn cung cấp trong nhật ký nấu ăn là chính xác và không vi phạm quyền riêng tư, bản quyền hoặc các quy định pháp luật hiện hành.
  
    Quyền sở hữu nội dung:
    Bạn sở hữu toàn bộ quyền sở hữu trí tuệ đối với nội dung mà bạn chia sẻ trong nhật ký nấu ăn. Tuy nhiên, bạn đồng ý cấp phép cho chúng tôi sử dụng, sao chép, phân phối và hiển thị nội dung đó trong phạm vi hoạt động của ứng dụng.
  
    Hạn chế trách nhiệm:
    Chúng tôi không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc sử dụng ứng dụng nhật ký nấu ăn hoặc sự không thể truy cập vào nó. Bạn sử dụng ứng dụng này hoàn toàn dựa trên sự chịu rủi ro cá nhân của mình.
  
    Tuân thủ quy định pháp luật:
    Bạn đồng ý tuân thủ tất cả các quy định pháp luật và quy định hiện hành liên quan đến việc sử dụng ứng dụng nhật ký nấu ăn.
  
    Thay đổi và cập nhật:
    Chúng tôi có quyền thay đổi và cập nhật Điều khoản và Quy định này theo ý muốn. Việc thay đổi sẽ được thông báo cho bạn thông qua ứng dụng hoặc các phương tiện truyền thông khác. Bằng cách tiếp tục sử dụng ứng dụng, bạn đồng ý tuân thủ các thay đổi này.
  `);
  };

  const _handleOnClick_ = () => {
    setHeading("Privacy policy");
    setContent(`Chính sách bảo mật

    Thông tin thu thập:
    Chúng tôi thu thập và lưu trữ thông tin cá nhân mà bạn cung cấp khi sử dụng ứng dụng nhật ký nấu ăn, bao gồm tên, địa chỉ email và thông tin khác liên quan đến hoạt động nấu ăn của bạn. Chúng tôi cam kết bảo vệ thông tin cá nhân này và sử dụng nó chỉ cho mục đích liên quan đến ứng dụng.

    Sử dụng thông tin:
    Thông tin cá nhân mà chúng tôi thu thập có thể được sử dụng để cung cấp và cá nhân hóa trải nghiệm sử dụng ứng dụng nhật ký nấu ăn, bao gồm cung cấp các gợi ý nấu ăn, phân tích dữ liệu và cải thiện dịch vụ của chúng tôi. Chúng tôi sẽ không tiết lộ thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý rõ ràng từ bạn, trừ khi bắt buộc theo quy định pháp luật.

    Bảo mật thông tin:
    Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng cách sử dụng các biện pháp bảo mật thích hợp. Chúng tôi áp dụng các biện pháp kỹ thuật và an ninh để ngăn chặn truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ thông tin cá nhân của bạn.

    Cookies:
    Ứng dụng nhật ký nấu ăn có thể sử dụng cookies hoặc các công nghệ tương tự để thu thập thông tin và cung cấp trải nghiệm tốt hơn cho người dùng. Bạn có thể tùy chỉnh cài đặt trình duyệt để từ chối cookies hoặc cảnh báo khi có cookies được gửi đến thiết bị của bạn.

    Quyền riêng tư của trẻ em:
    Ứng dụng nhật ký nấu ăn không dành cho trẻ em dưới 13 tuổi. Chúng tôi không thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi một cách cố ý. Nếu phát hiện thông tin cá nhân của trẻ em dưới 13 tuổi đã được thu thập, chúng tôi sẽ xóa nó khỏi hệ thống của chúng tôi ngay lập tức.

    Sửa đổi chính sách:
    Chúng tôi có quyền sửa đổi chính sách bảo mật này theo ý muốn. Bất kỳ thay đổi nào sẽ được thông báo qua ứng dụng hoặc trang web của chúng tôi. Bằng cách tiếp tục sử dụng ứng dụng, bạn đồng ý tuân thủ các thay đổi.`);
  };

  return (
    <div className="px-[5vw]">
      <div className="py-[2.5vh] text-white text-[1.75rem] font-semibold">
        {heading}
      </div>

      <div className="flex justify-start items-start">
        <div>
          <div className="w-[30vw] h-[30vh] rounded-md bg-[#ebeced] flex flex-col justify-start items-start">
            <div className="w-[30vw] h-[7.5vh] rounded-t-md bg-[#5c7099] px-[1vw] py-[1vh] text-white text-[1.5rem]">
              Help
            </div>

            <button
              onClick={handleOnClick}
              className="text-[#23497c] text-[1.25rem] h-[7.5vh] w-[30vw] text-left px-[1vw] hover:underline hover:text-[#f60] hover:bg-gray-300 duration-150"
              type="button"
            >
              Terms and rules
            </button>
            <button
              onClick={_handleOnClick_}
              className="text-[#23497c] text-[1.25rem] h-[7.5vh] w-[30vw] text-left px-[1vw] hover:underline hover:text-[#f60] hover:bg-gray-300 duration-150"
              type="button"
            >
              Privacy policy
            </button>
          </div>
        </div>

        <div className="min-w-[63vw] rounded-md ml-[1vw] bg-[#ebeced] h-[75vh] text-[1.25rem] px-[1vw] py-[1vh]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
