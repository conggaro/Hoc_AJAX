// để gửi Request lên Server
// thì cần phải biết
// Server nằm ở đâu và gửi lên chỗ nào trên Server

// khai báo biến "chuoi_URL"
// chứa địa chỉ và nơi lấy dữ liệu trên Server

// https://jsonplaceholder.typicode.com    --> Đây là địa chỉ Server
// /posts                                   --> Đây là nơi lấy dữ liệu trên Server
var chuoi_URL = "https://jsonplaceholder.typicode.com/posts";


// lấy phần tử div có id là "output"
var dt_div = document.getElementById("output");


// tạo đối tượng từ lớp XMLHttpRequest
// XHR là viết tắt của XMLHttpRequest
var dt_XHR = new XMLHttpRequest();


// đối tượng dt_XHR
// mở 1 kết nối tới Server
dt_XHR.open("GET", chuoi_URL);


// dùng hàm send()
// để gửi Request lên Server
dt_XHR.send();


// tạo hàm xử lý kết quả
function Ham_XuLy_KetQua(){
    if (dt_XHR.readyState === XMLHttpRequest.DONE) {    // câu lệnh này có tác dụng lấy trạng thái của đối tượng dt_XHR
        dt_div.innerHTML = dt_XHR.responseText;
    }
}


// khi 1 Request gửi lên Server
// mà nó có sự thay đổi trạng thái
// thì nó sẽ gọi hàm Ham_XuLy_KetQua
// để ghi kết quả đấy vào thẻ div
dt_XHR.onreadystatechange = Ham_XuLy_KetQua;