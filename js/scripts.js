const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeDiv = document.getElementById("qr-code");
const qrCodeImg = document.querySelector("#qr-code img");
const statusMessage = document.querySelector("#status-message");
const downloadBtn = document.querySelector("#download-btn");

function resetApp() {
    qrCodeInput.value = "";
    qrCodeImg.src = "";
    container.classList.remove("active");
    statusMessage.textContent = "";
    qrCodeBtn.innerText = "Gerar QR Code";
    downloadBtn.style.display = "none";
}

// Eventos - Gerar QR Code 
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value.trim();

    if (!qrCodeInputValue) {
        statusMessage.textContent = "Por favor, digite para gerar o QR Code.";
        return;
    }

    qrCodeBtn.disabled = true;
    qrCodeBtn.innerText = "Gerando código...";
    statusMessage.textContent = "";

    qrCodeImg.crossOrigin = "anonymous";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.onload = () => {
        container.classList.add("active");
        statusMessage.textContent = "Código criado!";
        qrCodeBtn.disabled = false;
        qrCodeBtn.innerText = "Criar novo QR Code";

        downloadBtn.style.display = "block";
    };


    qrCodeImg.onerror = () => {
        statusMessage.textContent = "Erro ao gerar o QR Code.";
        qrCodeBtn.disabled = false;
        qrCodeBtn.innerText = "Gerar QR Code";
    };
}

// Evento para ativar tecla enter 
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Eventos - Limpar área do QR Code
    qrCodeInput.addEventListener("keyup", () => {
        if (!qrCodeInput.value.trim()) {
        resetApp();
        }   
    });

qrCodeBtn.addEventListener("click", () => {
    if (qrCodeBtn.innerText === "Gerar QR Code") {
        generateQrCode();
    } else {
        resetApp();
    }
});

// Evento de download
    downloadBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const img = qrCodeImg;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/jpeg', 0.9);

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "qr-code.jpg";
    link.click();
});
