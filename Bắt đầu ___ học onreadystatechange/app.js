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
    // trạng thái của dt_XHR
    // khi viết câu lệnh var dt_XHR = new XMLHttpRequest();
    // thì trạng thái là "UNSENT" hoặc viết là số 0 (có giá trị là 0)
    // đây là trạng thái bắt đầu của dt_XHR

    // khi viết câu lệnh dt_XHR.open("GET", chuoi_URL);
    // và dt_XHR.send(); thành công
    // thì trạng thái là "OPENED" hoặc viết là số 1 (có giá trị là 1)

    // khi đối tượng dt_XHR
    // nhận được header của Server trả về (Response)
    // thì trạng thái là "HEADERS_RECEIVED" hoặc viết là số 2 (có giá trị là 2)

    // sau khi nhận header từ Server
    // đối tượng dt_XHR
    // tiếp tục nhận nội dung gửi từ Server
    // thì trạng thái là "LOADING" hoặc viết là số 3 (có giá trị là 3)

    // cuối cùng
    // khi đã nhận dữ liệu thành công
    // hoặc nhận dữ liệu thất bại (vì có 1 lỗi bất kỳ)
    // thì trạng thái là "DONE" hoặc viết là số 4 (có giá trị là 4)

    if (dt_XHR.readyState === XMLHttpRequest.DONE) {    // câu lệnh này có tác dụng lấy trạng thái của đối tượng dt_XHR
        // bạn có thể viết code
        // như này:
        // if (dt_XHR.readyState === 4) {...} cũng được luôn
        // tức là dùng số 4
        // thay cho XMLHttpRequest.DONE
        // số 0, số 1, số 2, số 3
        // thì tương ứng với
        // UNSENT, OPENED, HEADERS_RECEIVED, LOADING

        dt_div.innerHTML = dt_XHR.responseText;
    }


    // viết code hứng dữ liệutrạng thái
    if (dt_XHR.readyState === XMLHttpRequest.UNSENT) {
        console.log("Khởi tạo kết nối");
        alert("Khởi tạo kết nối");
    }
    else if (dt_XHR.readyState === XMLHttpRequest.OPENED) {
        console.log("Mở kết nối");
        alert("Mở kết nối");
    }
    else if (dt_XHR.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        console.log("Đã nhận được header");
        alert("Đã nhận được header");
    }
    else if (dt_XHR.readyState === XMLHttpRequest.LOADING) {
        console.log("Đang tải nội dung");
        alert("Đang tải nội dung");
    }
    else if (dt_XHR.readyState === XMLHttpRequest.DONE) {
        console.log("Hoàn thành");
        alert("Hoàn thành");
    }
}


// khi 1 Request gửi lên Server
// mà nó có sự thay đổi trạng thái
// thì nó sẽ gọi hàm Ham_XuLy_KetQua
// để ghi kết quả đấy vào thẻ div
dt_XHR.onreadystatechange = Ham_XuLy_KetQua;


// Chú ý:
// 1. khi đối tượng dt_XHR
// chuyển từ trạng thái UNSENT sang OPENED (từ 0 --> 1)
// thì nó gọi hàm onreadystatechange

// 2. khi đối tượng dt_XHR
// chuyển từ trạng thái OPENED sang HEADERS_RECEIVED (từ 1 --> 2)
// thì nó gọi hàm onreadystatechange

// 3. khi đối tượng dt_XHR
// chuyển từ trạng thái HEADERS_RECEIVED sang LOADING (từ 2 --> 3)
// thì nó gọi hàm onreadystatechange

// 4. khi đối tượng dt_XHR
// chuyển từ trạng thái LOADING sang DONE (từ 3 --> 4)
// thì nó gọi hàm onreadystatechange

// bằng việc cài đặt hàm Ham_XuLy_KetQua()
// chúng ta có thể biết được đối tượng dt_XHR đang ở trạng thái nào
// để xử lý với từng trạng thái đó

// để lấy được trạng thái
// thì chúng ta có câu lệnh
// if (dt_XHR.readyState === XMLHttpRequest.DONE) {
//      // code xử lý
// }