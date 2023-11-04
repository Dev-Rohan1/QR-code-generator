let qrBtn = document.querySelector(".qr-btn");
let qrText = document.querySelector(".qr-text");
let qrImage = document.querySelector(".qr-image img");
let message = document.querySelector(".message");


function qrCodeGenerator(qrValue) {
    if (qrText.value == 0) {
        message.style.left = "5%";
        setTimeout(() => {
            message.style.left = "-90%";
        }, 2000);
    } else{
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        qrImage.style.maxHeight = "100%";
        qrImage.style.marginTop = "30px";
    }
}

qrBtn.addEventListener("click", function() {
    qrCodeGenerator()
    qrText.value = "";
});