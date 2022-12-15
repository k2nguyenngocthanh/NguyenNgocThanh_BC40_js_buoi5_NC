function tinhTienThue(){
    var hoTenEL=document.getElementById("hoten").value;
    var tongThuNhap=document.getElementById("tong-thu-nhap").value*1;
    var soNguoiPhuThuoc=document.getElementById("phu-thuoc").value*1;
    var thuNhapChiuThue=document.value*1;

    thuNhapChiuThue=tongThuNhap-4e6-soNguoiPhuThuoc*16e5;

    var tinhTienThueEL=document.value*1;


    tinhTienThueEL=0;

    if(0<thuNhapChiuThue && thuNhapChiuThue<=6e7){
        tinhTienThueEL=thuNhapChiuThue*0.05;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    
    else if(6e7<thuNhapChiuThue && thuNhapChiuThue<=12e7){
        tinhTienThueEL=thuNhapChiuThue*0.1;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    else if(12e7<thuNhapChiuThue && thuNhapChiuThue<=21e7){
        tinhTienThueEL=thuNhapChiuThue*0.15;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    else if(21e7<thuNhapChiuThue && thuNhapChiuThue<=384e6){
        tinhTienThueEL=thuNhapChiuThue*0.2;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    else if(384e6<thuNhapChiuThue && thuNhapChiuThue<=624e6){
        tinhTienThueEL=thuNhapChiuThue*0.25;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    else if(624e6<thuNhapChiuThue && thuNhapChiuThue<=96e7){
        tinhTienThueEL=thuNhapChiuThue*0.3;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    else{
        tinhTienThueEL=thuNhapChiuThue*0.35;
        document.getElementById("tinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${tinhTienThueEL} VNĐ  </h2>`
    }
    
}


/**Bài 2 */

function anDi(){
var option = document.getElementById('loaikhachhang').value;

var connect = document.getElementById('connect')
    if(option==='company'){
        connect.style.display ='block';

    }else if(option==='user'){
        connect.style.display ='none';
    }
   
}
function tinhTienCap(){
    var loaiKhachHang=document.getElementById("loaikhachhang").value;
    var maKhachHang=document.getElementById("maKH").value;
    var soKenhCaoCap=document.getElementById("SoKenh").value*1;
    var soKetNoi=document.getElementById("connect").value*1;
    var tinhTien=document.value;

    if(loaiKhachHang==="user"){
        tinhTien=4.5+20.5+7.5*soKenhCaoCap;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${maKhachHang} , số tiền cáp phải trả là ${tinhTien} $  </h2>`
    }
    else if(loaiKhachHang==="company" && soKetNoi<=10){
        tinhTien=15+75+soKetNoi*0+50*soKenhCaoCap;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${maKhachHang} , số tiền cáp phải trả là ${tinhTien} $  </h2>`
    }
    else if(loaiKhachHang==="company" && soKetNoi>10){
        tinhTien=15+75+(soKetNoi-10)*5+50*soKenhCaoCap;
        document.getElementById("resultTinhTien").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${maKhachHang} , số tiền cáp phải trả là ${tinhTien} $  </h2>`
    }

}