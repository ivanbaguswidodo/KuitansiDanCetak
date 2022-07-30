let BtnSubmit = document.getElementById('btnSubmit')

let carts = []

function submitHandler(){
    let id;
    if(carts.length ===0){
        id= 1
    }else{
        id = carts[carts.length - 1].id + 1;
    }
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;
    let namaValue = document.getElementById('nama').value;
    let tempObj = {
        id,
        nama: barangValue,
        harga: +hargaValue
    }
    document.getElementById('namaCart').innerHTML = namaValue
    carts.push(tempObj)
    getCarts()
    // console.log(carts)
}

function getCarts(){
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = ''
    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
        <td>${cart.id}</td>
        <td>${cart.nama}</td>
        <td>${cart.harga}</td>
        </tr>`
    })
}

let BtnPrint = document.getElementById('btnPrint')

BtnSubmit.addEventListener('click',submitHandler)

function printHandler(){
    // console.log("Cetak")
    document.querySelector('.form-box').
    style.display = 'none';
    BtnPrint.style.display = 'none';
    

    document.querySelector('.footer').
    style.display = 'none';
    BtnPrint.style.display = 'none';
    window.print()
}

BtnPrint.addEventListener('click',printHandler)