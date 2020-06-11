var btntinhtoan = document.querySelector('#btnTinhToan');
btntinhtoan.onclick = function () {
    var money = document.querySelector('#money').value;
    var tip = document.querySelector('#tip').value;
    var tienTip = (Number(money) * Number(tip));
    var soNguoi = document.querySelector('#nguoi').value;    
    var kq = Number(tienTip) / Number(soNguoi);
    kq = kq.toFixed(2);
    document.querySelector('#kqTip').innerHTML = kq ;
}
