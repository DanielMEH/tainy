let microphone = document.getElementById("microphone");
let classInpu = document.getElementById("classInpu");
microphone.addEventListener("click", listenMicrofono);
let listent;

function listenMicrofono() {
  if (!"webkitSpeechRecognition" in window) {
    alert("¡API no soportada!");
  } else {
    listent = new webkitSpeechRecognition();
    listent.interim = true;
    listent.lang = "es-ES";
    listent.continuous = true;
    listent.addEventListener("result", startListent);
    listent.start();
  }
}

function startListent(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      classInpu.innerHTML = event.results[i][0].transcript;
      console.log(event.results[i][0].transcript)
  }
}
}
