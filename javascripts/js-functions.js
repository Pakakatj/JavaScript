document.addEventListener("DOMContentLoaded", () => {
  scaleCapusta();
  scaleCarrot();
  scaleTikvas();
  changeRoom();
});

function changeRoom() {
  let home = document.querySelector("#home");
  let cherdak = document.querySelector("#cherdak");
  let cherdakRoom = document.querySelector(".cherdak");
  let returnHome = document.querySelectorAll(".domik");
  let komnatas = document.querySelectorAll(".komnata");
  let bedroom = document.querySelector("#bedroomm");
  let BedRoom = document.querySelector(".bedroom");
  let bathroom = document.querySelector("#bathroomm");
  let BathRoom = document.querySelector(".bathroom");
  let livingroom = document.querySelector("#livingroomm");
  let LivingRoom = document.querySelector(".livingroom");
  let kitchen = document.querySelector("#kitchenn");
  let KitchenRoom = document.querySelector(".kitchen");
  returnHome.forEach((domik) => {
    domik.addEventListener("click", () => {
      komnatas.forEach((komnata) => {
        komnata.classList.add("hidden");
      });
      home.classList.remove("hidden");
    });
  });

  cherdakRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    cherdak.classList.remove("hidden");
  });

  BedRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bedroomm.classList.remove("hidden");
  });

  BathRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bathroomm.classList.remove("hidden");
  });

  LivingRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    livingroomm.classList.remove("hidden");
  });

  KitchenRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    kitchenn.classList.remove("hidden");
  });
}

function scaleCapusta() {
  const kapustas = document.querySelectorAll(".kapusta");

  kapustas.forEach((kapusta) => {
    kapusta.addEventListener("click", () => {
      enlarge(kapusta);
    });
  });
}

function enlarge(image) {
  const currentScale = image.style.transform.match(/scale\(([^)]+)\)/);
  const newScale = currentScale ? parseFloat(currentScale[1]) * 2 : 2; // Увеличение в 2 раза

  if (newScale >= 8) {
    // Если масштаб достиг 8, изображение исчезает
    image.style.opacity = 0; // Устанавливаем прозрачность в 0
  } else {
    image.style.transform = `scale(${newScale})`; // Установка нового масштаба
  }
}

function scaleCarrot() {
  const carrots = document.querySelectorAll(".carrot");

  carrots.forEach((carrot) => {
    carrot.addEventListener("click", () => {
      if (carrot.classList.contains("mini")) {
        carrot.classList.add("midi");
        carrot.classList.remove("mini");
      } else if (carrot.classList.contains("midi")) {
        carrot.classList.add("maxi");
        carrot.classList.remove("midi");
      } else if (carrot.classList.contains("maxi")) {
        carrot.style.opacity = 0;
      }
    });
  });
}
function scaleTikvas() {
  const pumpkin = document.querySelectorAll(".pumpkin");

  pumpkin.forEach((pumpkin) => {
    pumpkin.addEventListener("click", () => {
      enlarge(pumpkin);
    });
  });
}

function enlarge(image) {
  const currentScale = image.style.transform.match(/scale\(([^)]+)\)/);
  const newScale = currentScale ? parseFloat(currentScale[1]) * 2 : 2; // Увеличение в 2 раза

  if (newScale >= 8) {
    // Если масштаб достиг 8, изображение исчезает
    image.style.opacity = 0; // Устанавливаем прозрачность в 0
  } else {
    image.style.transform = `scale(${newScale})`; // Установка нового масштаба
  }
}
const clouds = document.querySelectorAll(".cloud");

clouds.forEach((cloud) => {
  const randomDuration = Math.random() * (20 - 10) + 10; // Генерируем случайную продолжительность
  cloud.style.animationDuration = `${randomDuration}s`; // Устанавливаем случайную длительность анимации
});

const svet = document.getElementById("svet");
const images = ["images/svet.svg", "images/attic2.svg"]; // Массив с путями к изображениям
let currentIndex = 0;

svet.addEventListener("click", () => {
  // Уменьшаем непрозрачность до 0
  image.style.opacity = 0;

  setTimeout(() => {
    // Меняем изображение
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
    // Увеличиваем непрозрачность обратно до 1
    image.style.opacity = 1;
  }, 500); // Задержка на 0.5 секунды для плавного перехода
});

const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", null);
});

dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  const dropzoneRect = dropzone.getBoundingClientRect();
  const draggableRect = draggable.getBoundingClientRect();

  // Проверяем, пересекается ли изображение с коробкой
  if (
    draggableRect.left < dropzoneRect.right &&
    draggableRect.right > dropzoneRect.left &&
    draggableRect.top < dropzoneRect.bottom &&
    draggableRect.bottom > dropzoneRect.top
  ) {
    draggable.style.display = "none"; // Скрываем изображение
  }
});
