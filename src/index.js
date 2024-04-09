import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

/* LOAD EVENT */

const bodyElement = document.querySelector("body");
bodyElement.classList.add("loading");

window.addEventListener("load", (event) => {
  console.log("Sayfa yüklendi");
  bodyElement.classList.remove("loading");
});

/* FOCUS and BLUR EVENT */

const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((item) => {
  item.addEventListener("focus", (event) => {
    event.target.style.background = "rgba(255, 0, 0, 0.5)";
    event.target.style.fontSize = "3rem";
  });
  item.addEventListener("blur", (event) => {
    event.target.style.background = "none";
    event.target.style.fontSize = "1.6rem";
  });
});

/* MOUSE OVER, MOUSE OUT AND WHEEL EVENT */

let scale = 1;
function zoom(event, image) {
  event.preventDefault(); //default olayı engeller
  scale += event.deltaY * -0.1;
  scale = Math.min(Math.max(0.125, scale), 2);
  image.style.transform = `scale(${scale})`;
}

const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  image.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)";
    image.addEventListener("wheel", (event) => zoom(event, image));
  });
  image.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
    image.removeEventListener("wheel", (event) => zoom(event, image));
  });
});

/* RESIZE EVENT */

addEventListener("resize", (event) => {
  console.log(window.innerWidth, window.innerHeight);
});

/* SELECT EVENT */

const theInput = document.createElement("input");
theInput.setAttribute("type", "text");

theInput.addEventListener("select", (event) => {
  console.log(event.target.value);
});

const intro = document.querySelector(".intro");
intro.appendChild(theInput);

/* DARK MODE LIGHT MODE  KEYDOWN EVENT */

let mode = "light";

const bodyLetters = document.querySelector("body");

bodyLetters.addEventListener("keydown", (event) => {
  if (event.key === "2") {
    if (mode === "light") {
      mode = "dark";
      bodyLetters.style.color = "white";
      bodyLetters.style.backgroundColor = "black";
    } else {
      mode = "light";
      bodyLetters.style.color = "black";
      bodyLetters.style.backgroundColor = "white";
    }
  }
});

/* dökümandaki tüm resimlerin üzerine mouse ile gelince (mouseover) üzerine gelinen resme grayscale stili eklensin. mouse cıktıgı zaman (mouseleave) grayscale stili çıkarılsın */

const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", (event) => {
    images[i].style.filter = "grayscale(100%)";
  });
  images[i].addEventListener("mouseleave", (event) => {
    images[i].style.filter = "unset";
  });
}

/* input alanına bir şeyler yazınca (input event): büyük harfe dönüştürsün. 5 karakterden uzun oldugunda buttonu enabled etsin. küçük ise disabled etsin. */

document.querySelector("input").addEventListener("input", (event) => {
  const buyukHarf = event.target.value.toUpperCase();
  event.target.value = buyukHarf;
  if (buyukHarf.length > 5) {
    document.querySelector("button").disabled = false;
  } else {
    document.querySelector("button").disabled = true;
  }
});

/* form submit edildiğinde; input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi.." yazsın. input alanını sıfırlasın. kaydet butonunu disabled yapsın. */

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");
  const metin = `${input.value} başarı ile eklendi..`;
  document.querySelector("#submitResult").textContent = metin;
  input.value = "";
  document.querySelector("button").disabled = true;
});

/* sayfa yüklendiğinde body'nin arkaplan rengini degistirelim */

const body = document.querySelector("body");

window.addEventListener("load", (event) => {
  body.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
});

/* FOCUS ve BLUR EVENTLERI: input alanına focus oldugunda border rengini kirmizi yapalım */

const input = document.getElementById("input-1");

input.addEventListener("focus", (event) => {
  event.target.style.border = "10px solid red";
});

input.addEventListener("blur", (event) => {
  event.target.style.border = "2px solid #ccc";
});

/* DRAG AND DROP */

const img2 = document.getElementById("img2");

img2.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text", event.target.id);
});

const img1 = document.getElementById("img1");

img1.addEventListener("drop", (event) => {
  let data = event.dataTransfer.getData("text");
  event.target.src = document.getElementById(data).src;
  event.preventDefault();
});

img1.addEventListener("dragover", (event) => {
  event.preventDefault();
});
