const api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="; 
const Qr_Data=document.querySelector("#Qr-text");
const Generate_QrCode=document.querySelector("#generate-btn");
const QrCodeImage=document.querySelector("#Qr-image");
let image_box=document.getElementsByClassName("image-box");


Generate_QrCode.addEventListener("click",()=>{
const CodeApi=api+`${Qr_Data}`;
QrCodeImage.src=CodeApi;
image_box.classList.add("show-image");

});