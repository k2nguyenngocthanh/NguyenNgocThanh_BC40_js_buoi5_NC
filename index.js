function Tinhtien(){
    var hoTenEL=document.getElementById("hoten").value;
    var tongThuNhap=document.getElementById("tong-thu-nhap").value*1;
    var soNguoiPhuThuoc=document.getElementById("phu-thuoc").value*1;
    var Thunhapchiuthue=document.value*1;

    Thunhapchiuthue=tongThuNhap-4e6-soNguoiPhuThuoc*16e5;

    var Tinhtienthue=document.value*1;


    Tinhtienthue=0;

    if(0<Thunhapchiuthue && Thunhapchiuthue<=6e7){
        Tinhtienthue=Thunhapchiuthue*0.05;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    
    else if(6e7<Thunhapchiuthue && Thunhapchiuthue<=12e7){
        Tinhtienthue=Thunhapchiuthue*0.1;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    else if(12e7<Thunhapchiuthue && Thunhapchiuthue<=21e7){
        Tinhtienthue=Thunhapchiuthue*0.15;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    else if(21e7<Thunhapchiuthue && Thunhapchiuthue<=384e6){
        Tinhtienthue=Thunhapchiuthue*0.2;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    else if(384e6<Thunhapchiuthue && Thunhapchiuthue<=624e6){
        Tinhtienthue=Thunhapchiuthue*0.25;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    else if(624e6<Thunhapchiuthue && Thunhapchiuthue<=96e7){
        Tinhtienthue=Thunhapchiuthue*0.3;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    else{
        Tinhtienthue=Thunhapchiuthue*0.35;
        document.getElementById("tt").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${hoTenEL} , số tiền thuế phải trả là ${Tinhtienthue} VNĐ  </h2>`
    }
    
}


/**Bài 2 */

function Andi(){
var option = document.getElementById('loaikhachhang').value;

var connect = document.getElementById('connect')
    if(option==='company'){
        connect.style.display ='block';

    }else if(option==='user'){
        connect.style.display ='none';
    }
   
}
function Tinhtiencap(){
    var Loaikhachhang=document.getElementById("loaikhachhang").value;
    var Makhachhang=document.getElementById("maKH").value;
    var Sokenhcaocap=document.getElementById("SoKenh").value*1;
    var Soketnoi=document.getElementById("connect").value*1;
    var Tinhtien=document.value;

    if(Loaikhachhang==="user"){
        Tinhtien=4.5+20.5+7.5*Sokenhcaocap;
        document.getElementById("tinhtiencap").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${Makhachhang} , số tiền cáp phải trả là ${Tinhtien} $  </h2>`
    }
    else if(Loaikhachhang==="company" && Soketnoi<=10){
        Tinhtien=15+75+Soketnoi*0+50*Sokenhcaocap;
        document.getElementById("tinhtiencap").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${Makhachhang} , số tiền cáp phải trả là ${Tinhtien} $  </h2>`
    }
    else if(Loaikhachhang==="company" && Soketnoi>10){
        Tinhtien=15+75+(Soketnoi-10)*5+50*Sokenhcaocap;
        document.getElementById("tinhtiencap").innerHTML=`<h2 class="mt-5 text-danger text-center">Họ tên là: ${Makhachhang} , số tiền cáp phải trả là ${Tinhtien} $  </h2>`
    }

}