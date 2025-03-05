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

  cherdakRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    cherdak.classList.remove("hidden");
  });

  let bedroom = document.querySelector("#bedroomm");
  let BedRoom = document.querySelector(".bedroom");

  BedRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bedroomm.classList.remove("hidden");
  });
  let bathroom = document.querySelector("#bathroomm");
  let BathRoom = document.querySelector(".bathroom");

  BathRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    bathroomm.classList.remove("hidden");
  });
  let livingroom = document.querySelector("#livingroomm");
  let LivingRoom = document.querySelector(".livingroom");

  LivingRoom.addEventListener("click", () => {
    home.classList.add("hidden");
    livingroomm.classList.remove("hidden");
  });
  let kitchen = document.querySelector("#kitchenn");
  let KitchenRoom = document.querySelector(".kitchen");

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
