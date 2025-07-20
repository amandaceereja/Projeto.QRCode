const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeDiv = document.getElementById("qr-code");

const qrCodeImg = document.querySelector("#qr-code img");

const statusMessage = document.querySelector("#status-message");


function resetApp() {
  qrCodeInput.value = "";
  qrCodeDiv.innerHTML = "";
  container.classList.remove("active");
  statusMessage.textContent = "";
  qrCodeBtn.innerText = "Gerar QR Code";
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

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.onload = () => {
        container.classList.add("active");
        statusMessage.textContent = "Código criado!";
        qrCodeBtn.disabled = false;
        qrCodeBtn.innerText = "Criar novo QR Code";
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