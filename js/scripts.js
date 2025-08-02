// Elementos del DOM
// ------------------------------
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeDiv = document.getElementById("qr-code");
const qrCodeImg = document.querySelector("#qr-code img");
const statusMessage = document.querySelector("#status-message");
const downloadBtn = document.getElementById("download-btn");

// Funciones principales
function resetApp() {
    qrCodeInput.value = "";
    statusMessage.textContent = "";
    qrCodeBtn.innerText = "Generar Código QR";
    downloadBtn.style.display = "none";

    qrCodeDiv.style.transition = "none";
    container.classList.remove("active");
    void qrCodeDiv.offsetWidth;
    qrCodeDiv.style.transition = "";
    qrCodeImg.src = "";
}

function generateQrCode() {
    const value = qrCodeInput.value.trim();

    if (!value) {
        statusMessage.textContent = "Por favor, escribe algo para generar el código.";
        return;
    }

    qrCodeBtn.disabled = true;
    qrCodeBtn.innerText = "Generando...";
    statusMessage.textContent = "";
    qrCodeImg.crossOrigin = "anonymous";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(value)}`;

    qrCodeImg.onload = () => {
        container.classList.add("active");
        statusMessage.textContent = "¡Código creado!";
        qrCodeBtn.disabled = false;
        qrCodeBtn.innerText = "Criar novo QR Code";
        
        downloadBtn.style.display = "block";
    };

    qrCodeImg.onerror = () => {
        statusMessage.textContent = "Error al generar el Código QR.";
        qrCodeBtn.disabled = false;
        qrCodeBtn.innerText = "Generar Código QR";
    };
}

function animateDownloadBtn() {
    downloadBtn.classList.add("pulse");
    downloadBtn.addEventListener("animationend", () => {
        downloadBtn.classList.remove("pulse");
    }, { once: true });
}


// Eventos
qrCodeBtn.addEventListener("click", () => {
    if (qrCodeBtn.innerText === "Generar Código QR") {
        generateQrCode();
    } else {
        resetApp();
    }
    qrCodeBtn.blur();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value.trim()) {
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

downloadBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = qrCodeImg.naturalWidth;
    canvas.height = qrCodeImg.naturalHeight;
    context.drawImage(qrCodeImg, 0, 0);

    const dataURL = canvas.toDataURL("image/jpeg", 0.9);
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "codigo-qr.jpg";
    link.click();

    downloadBtn.blur();
    animateDownloadBtn();
});

