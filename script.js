var url = "https://alexandru-07.github.io/camera-stream/";

new QRCode(document.getElementById("qrcode"), url);

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById("video").srcObject = stream;
  } catch (err) {
    console.error("Camera access denied: ", err);
  }
}

startCamera();
